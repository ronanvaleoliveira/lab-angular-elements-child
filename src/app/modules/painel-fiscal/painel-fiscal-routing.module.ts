import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PainelFiscalHomeComponent } from "./painel-fiscal-home/painel-fiscal-home.component";

const routes: Routes = [
    {
      path: 'painel-fiscal',
      component: PainelFiscalHomeComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PainelFiscalRoutingModule {}