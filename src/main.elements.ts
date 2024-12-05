import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModuleElements } from "./app/app.module.elements";



platformBrowserDynamic().bootstrapModule(AppModuleElements)
  .catch(err => console.error(err));