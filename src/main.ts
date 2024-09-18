import { provideExperimentalZonelessChangeDetection } from "@angular/core";
import {
  bootstrapApplication,
  provideClientHydration,
} from "@angular/platform-browser";
import { App } from "./app";

bootstrapApplication(App, {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(),
  ],
});
