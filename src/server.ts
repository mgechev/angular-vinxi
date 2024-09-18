import { eventHandler } from "vinxi/http";
import { renderApplication } from "@angular/platform-server";
import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import { App } from "./app";
import { bootstrapApplication } from "@angular/platform-browser";

const bootstrap = () =>
  bootstrapApplication(App, {
    providers: [provideExperimentalZonelessChangeDetection()],
  });


export default eventHandler({
  handler: async (event) => {
    event.node.res.setHeader("Content-Type", "text/html");
    return renderApplication(bootstrap, {
      document: "<app-root></app-root>",
    });
  },
})
