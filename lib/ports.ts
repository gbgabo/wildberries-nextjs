import fs from "fs";
import path from "path";
import matter from "gray-matter";

const portsDirectory = path.join(process.cwd(), "public/ports");
const portNames = fs.readdirSync(portsDirectory);

export async function getPort(slug: string) {
  const ports = getPorts();
  const port = ports.find((port) => port.port === slug);

  const installPath = path.join(portsDirectory, slug, "install.md");
  const fileContent = fs.readFileSync(installPath, "utf8");

  const { content, data } = matter(fileContent);

  const contentHtml = content.toString();
  const includeFile = data.includeFile ? data.includeFile : false;

  return {
    ...port,
    contentHtml,
    includeFile,
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
