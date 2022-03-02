import fs from "fs";
import { createHash } from "crypto";
// import chromium from "chrome-aws-lambda";
// import { chromium as playwrightChromium } from "playwright-core";
// const { chromium } = require("chrome-aws-lambda");
import { chromium } from "playwright-chromium";

export default async function getOgImage(
  path: string,
  baseUrl = "localhost:3000/"
) {
  // if (process.env.NODE_ENV === "development") {
  //   return "og image will be generated in production";
  // }

  const url = `${baseUrl}${path}`;
  const hash = createHash("md5").update(url).digest("hex");

  const browser = await chromium.launch();
  const ogImageDir = `./public/img/og`;
  const imagePath = `${ogImageDir}/${hash}.png`;
  const publicPath = `${baseUrl}img/og/${hash}.png`;

  try {
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // file does not exists, so we create it
  }

  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(url, { waitUntil: "networkidle" });
  const buffer = await page.screenshot({ type: "png" });
  await browser.close();

  fs.mkdirSync(ogImageDir, { recursive: true });
  fs.writeFileSync(imagePath, buffer);

  return publicPath;
}
