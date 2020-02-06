import { fusebox } from 'fuse-box';
import * as path from 'path';
const fuse = fusebox({
  cache: true,
  devServer: true,
  entry: 'src/index.ts',
  hmr : { plugin : "src/hmr.ts"},
  target: 'browser',
  webIndex: {
    template: 'src/index.html',
  },
});

fuse.runDev({
  bundles: {
    app: 'app.js',
    distRoot: path.join(__dirname, 'dist'),
  },
});
