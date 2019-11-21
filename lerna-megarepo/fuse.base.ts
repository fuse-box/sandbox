import * as path from "path";

export function createBaseConfig<Base>(props: {
  dir: string;
  entry: string;
  config?: Base;
}): any {
  return {
    homeDir: __dirname,
    output: path.join(props.dir, "build"),
    target: "browser",
    tsConfig: path.join(props.dir, "tsconfig.json"),
    entry: path.join(props.dir, props.entry),
    devServer: true,
    webIndex: true,
    cache: false,
    ...(props.config || {})
  };
}
