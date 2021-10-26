interface Port {
  port: string;
  title: string;
  platform: Array<"all" | "mac" | "windows" | "linux">;
  contentHtml: string;
}
