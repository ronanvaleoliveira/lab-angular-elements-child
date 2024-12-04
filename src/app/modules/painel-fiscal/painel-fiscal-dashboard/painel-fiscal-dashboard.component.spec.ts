import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelFiscalDashboardComponent } from './painel-fiscal-dashboard.component';

describe('PainelFiscalDashboardComponent', () => {
  let component: PainelFiscalDashboardComponent;
  let fixture: ComponentFixture<PainelFiscalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelFiscalDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelFiscalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
