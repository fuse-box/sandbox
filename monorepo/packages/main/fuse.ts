import { fusebox } from "fuse-box";

fusebox({
  target: "browser",

  homeDir: "../../",
  entry: "packages/main/src/index.ts",
  tsConfig: "./tsconfig.json",
  cache: false,
  webIndex: true,
  devServer: true
}).runDev();
