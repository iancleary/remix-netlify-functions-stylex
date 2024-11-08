import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import styleX from "vite-plugin-stylex";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    styleX({
      // // https://stylexjs.com/docs/api/configuration/babel-plugin/#unstable_moduleresolution
      unstable_moduleResolution: {
        type: 'commonJS',
        //
        // rootDir cannot be "."
        // rootDir must be "./" since that resolves to the absolute path
        rootDir: "./" 
      },
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
});
