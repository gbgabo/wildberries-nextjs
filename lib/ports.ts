import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const portsDirectory = path.join(process.cwd(), "ports");
const portNames = fs.readdirSync(portsDirectory);

// export function getPorts() {
//   const ports = portNames.map((slug) => {
//     const installPath = path.join(portsDirectory, slug, "install.md");
//     const fileContent = fs.readFileSync(installPath, "utf8");
//     const matterResult = matter(fileContent);

//     const processedContent = await remark()
//       .use(html)
//       .process(matterResult.content);

//     // const contentHtml = processedContent.toString();

//     return {
//       port: slug,
//       title: matterResult.data.title,
//       platform: ["all"],
//     };
//   });
//   return ports;
// }

export async function getPort(slug: string) {
  const ports = getPorts();
  const port = ports.find((port) => port.port === slug);

  const installPath = path.join(portsDirectory, slug, "install.md");
  const fileContent = fs.readFileSync(installPath, "utf8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    ...port,
    contentHtml,
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
