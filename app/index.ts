import { Component, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    Hello, world!
  `,
  standalone: true
})
export class App {}

bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()]
});