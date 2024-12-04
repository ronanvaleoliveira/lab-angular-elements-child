import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeModule } from "./modules/home/home.module";
import { PainelFiscalModule } from "./modules/painel-fiscal/painel-fiscal.module";
import { PoModule } from '@po-ui/ng-components';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PoModule,
        AppRoutingModule,
        
        HomeModule,
        PainelFiscalModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
    ]
})
export class AppModule { }