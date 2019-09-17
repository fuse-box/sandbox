import { fusebox, sparky } from "fuse-box";
import * as path from "path";
class Context {
  isProduction;
  runServer;
  getServerConfig() {
    return fusebox({
      output: "dist/server/$name-$hash",
      target: "server",
      entry: "src/server.tsx",
      dependencies: { include: ["tslib"] },
      cache: {
        enabled: true,
        root: ".cache/server"
      },
      codeSplitting: { scriptRoot: path.resolve(__dirname, "./dist/server") }
    });
  }
  getBrowserConfig() {
    return fusebox({
      output: "dist/browser/$name-$hash",
      target: "browser",
      entry: "src/browser.tsx",

      dependencies: { include: ["tslib"] },
      webIndex: {
        publicPath: "/public",
        template: "src/index.html"
      },
      link: { useDefault: true },

      cache: {
        enabled: true,
        FTL: false,
        root: ".cache/browser"
      },
      watch: {
        chokidar: { usePolling: true }
      },
      devServer: {
        httpServer: false,
        hmrServer: { port: 7878 }
      }
    });
  }
}
const { task, exec, rm } = sparky<Context>(Context);

task("default", async ctx => {
  await rm("./dist");
  const browser = ctx.getBrowserConfig();
  await browser.runDev();

  const server = ctx.getServerConfig();
  await server.runDev(handler => {
    handler.onComplete(h => h.server.handleEntry());
  });
});

task("preview", async ctx => {
  ctx.isProduction = true;
  await rm("./dist");
  const browser = ctx.getBrowserConfig();
  await browser.runProd({ uglify: true, manifest: true });

  const server = ctx.getServerConfig();
  await server.runProd({
    uglify: false,
    manifest: true,
    handler: handler => handler.onComplete(h => h.server.handleEntry())
  });
});
task("dist", async ctx => {
  ctx.runServer = false;
  ctx.isProduction = true;
  const fuse = ctx.getBrowserConfig();
  await fuse.runProd({ uglify: false, manifest: true });
});
