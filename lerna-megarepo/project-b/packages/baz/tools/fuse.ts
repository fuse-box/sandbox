import { fusebox } from "fuse-box";
import { IPublicConfig } from "fuse-box/config/IPublicConfig";
import { createBaseConfig } from "../../../../fuse.base";
import * as path from "path";

fusebox(
  createBaseConfig<IPublicConfig>({
    dir: path.join(__dirname, ".."),
    entry: "src/index.ts",
    config: {
      /** the actual extra configuration could come here */
    }
  })
).runDev();
