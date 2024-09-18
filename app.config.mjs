import angular from "@analogjs/vite-plugin-angular";
import { createApp } from "vinxi";

export default createApp({
  routers: [
    {
      name: "client",
      type: "spa",
      handler: "./index.html",
      target: "browser",
      plugins: () => [angular()],
    }
  ],
});