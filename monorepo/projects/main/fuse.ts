import {fusebox } from 'fuse-box'
import { pluginTypeChecker } from 'fuse-box-typechecker';

const PATH = "." + __dirname.replace(process.cwd(), "").split(' ')[0];

fusebox({
  target: "browser",
  homeDir: "../../",
  entry: `${PATH}/src/index.ts`,
  tsConfig: "./tsconfig.json",
  cache: false,
  webIndex: true,
  devServer: true,
  plugins: [
    pluginTypeChecker({
      basePath: PATH,
      tsConfig: "./tsconfig.json",
      skipTsErrors: [6059]
    })
  ]
}).runDev();
