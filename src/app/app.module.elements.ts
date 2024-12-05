import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { DoBootstrap, Injector, NgModule } from "@angular/core";
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from "@angular/platform-browser";
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from "./app-routing.module";

import { PainelFiscalModule } from "./modules/painel-fiscal/painel-fiscal.module";
import { PainelFiscalHomeComponent } from "./modules/painel-fiscal/painel-fiscal-home/painel-fiscal-home.component";


@NgModule({
    imports: [
      BrowserModule,
      PoModule,
      AppRoutingModule,
      

      PainelFiscalModule,
    ],
    declarations: [
        // Declare components, directives, pipes here
    ],
    exports: [
        // Declare components, directives, pipes here
    ],
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModuleElements implements DoBootstrap{

    constructor(private readonly injector: Injector) { }
  
    ngDoBootstrap(): void {
      const elements: { [key: string]: any } = {
        'element-painel-fiscal-home': PainelFiscalHomeComponent
      };
  
      for (const [key, value] of Object.entries(elements)) {
        const element = createCustomElement(value, { injector: this.injector });
        customElements.define(key, element);
      }
    }
  }
  