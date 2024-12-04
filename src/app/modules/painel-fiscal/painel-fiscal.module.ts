import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelFiscalHomeComponent } from './painel-fiscal-home/painel-fiscal-home.component';
import { PainelFiscalRoutingModule } from './painel-fiscal-routing.module';



@NgModule({
  declarations: [PainelFiscalHomeComponent],
  imports: [
    CommonModule,
    PainelFiscalRoutingModule
  ]
})
export class PainelFiscalModule { }
