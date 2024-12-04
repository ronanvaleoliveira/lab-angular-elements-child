import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HomeModule } from "./modules/home/home.module";
import { PainelFiscalModule } from "./modules/painel-fiscal/painel-fiscal.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        
        HomeModule,
        PainelFiscalModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }