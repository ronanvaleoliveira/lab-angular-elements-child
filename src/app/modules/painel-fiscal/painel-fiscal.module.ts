import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelFiscalHomeComponent } from './painel-fiscal-home/painel-fiscal-home.component';
import { PainelFiscalRoutingModule } from './painel-fiscal-routing.module';
import { PainelFiscalDashboardComponent } from './painel-fiscal-dashboard/painel-fiscal-dashboard.component';



@NgModule({
  declarations: [
    PainelFiscalHomeComponent,
    PainelFiscalDashboardComponent
  ],
  imports: [
    CommonModule,
    PainelFiscalRoutingModule,
    
  ]
})
export class PainelFiscalModule { }
