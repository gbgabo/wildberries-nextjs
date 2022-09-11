import fs from "fs";
import path from "path";
import matter from "gray-matter";

const portsDirectory = path.join(process.cwd(), "public/ports");
const portNames = fs.readdirSync(portsDirectory);

export async function getPort(slug: string) {
  const ports = getPorts();
  const port = ports.find((port) => port.port === slug);
  const portDirectory = path.join(portsDirectory, slug);

  const instructionsPath = path.join(portDirectory, "install.md");
  const instructionsFile = fs.readFileSync(instructionsPath, "utf8");
  const { content } = matter(instructionsFile);
  const instructions = content;

  const assetsDirectory = path.join(portDirectory, "assets");
  let assets;
  try {
    assets = fs.readdirSync(assetsDirectory);
  } catch (err) {
    assets = null;
  }

  const screenshotsDirectory = path.join(portDirectory, "screenshots");
  let screenshots;
  try {
    screenshots = fs.readdirSync(screenshotsDirectory);
  } catch (err) {
    screenshots = null;
  }

  return {
    ...port,
    screenshots,
    instructions,
    assets,
  };
}

export function getPorts() {
  return portNames.map((slug) => {
    const installPath = path.join(portsDirectory, slug, "install.md");
    const fileContent = fs.readFileSync(installPath, "utf8");
    const { data } = matter(fileContent);
    return {
      port: slug,
      title: data.title,
    };
  });
}
