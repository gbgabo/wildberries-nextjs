interface Port {
  port: string;
  title: string;
  platform: Array<"all" | "mac" | "windows" | "linux" | "android" | "IOS">;
  includeFile: boolean;
  contentHtml: string;
  ogImage: string;
}
