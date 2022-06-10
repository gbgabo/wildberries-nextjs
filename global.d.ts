interface Port {
  port: string;
  title: string;
  platform: Array<"all" | "mac" | "windows" | "linux" | "android" | "IOS">;
  instructions: string;
  assets: string[];
  ogImage: string;
}
