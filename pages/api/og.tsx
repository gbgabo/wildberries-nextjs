import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import Port from "../../components/og/port";
import Index from "../../components/og/index";

export const config = {
  runtime: "experimental-edge",
};

const url = new URL(
  "../../public/fonts/JetBrainsMono-Medium.ttf",
  import.meta.url
) as unknown as RequestInfo;

// Make sure the font exists in the specified path:
const font = fetch(url).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : "port title";

    const hasPort = searchParams.has("port");
    const port = hasPort ? searchParams.get("port") : "vscode";

    const hasImage = searchParams.has("image");
    const image = hasImage ? searchParams.get("image") : "vscode.png";

    const isIndex = !hasImage && !hasPort && !hasTitle;

    return new ImageResponse(
      (
        <>
          {isIndex ? (
            <Index />
          ) : (
            <Port port={port} title={title} image={image} />
          )}
        </>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "JetBrains Mono",
            data: fontData,
            weight: 400,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
