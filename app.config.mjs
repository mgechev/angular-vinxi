import angular from "@analogjs/vite-plugin-angular";
import { createApp } from "vinxi";

export default createApp({
  server: {
    experimental: {
      asyncContext: true,
    },
  },
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "client",
      base: '/csr',
      type: "spa",
      handler: "./src/spa.ts",
      target: "browser",
      plugins: () => [angular()]
    },
    {
      name: "ssr",
      base: '/ssr',
      type: "http",
      handler: "./src/server.ts",
      target: "server",
      plugins: () => [angular()]
    },
  ],
});