import {fusebox } from 'fuse-box'
import { pluginTypeChecker } from 'fuse-box-typechecker';

fusebox({
  target: "browser",
  homeDir: "../../",
  entry: `sample/main/src/index.ts`,
  tsConfig: "./tsconfig.json",
  cache: false,
  webIndex: true,
  devServer: true,
  plugins: [
    pluginTypeChecker({
      basePath: "sample/main",
      tsConfig: "./tsconfig.json"
    })
  ]
}).runDev();
