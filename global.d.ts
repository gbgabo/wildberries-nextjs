interface Port {
  port: string;
  title: string;
  screenshots: string[] | null;
  platform: Array<"all" | "mac" | "windows" | "linux" | "android" | "IOS">;
  instructions: string;
  assets: string[] | null;
}
