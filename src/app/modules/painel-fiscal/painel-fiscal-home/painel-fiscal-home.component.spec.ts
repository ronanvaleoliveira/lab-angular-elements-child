import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelFiscalHomeComponent } from './painel-fiscal-home.component';

describe('PainelFiscalHomeComponent', () => {
  let component: PainelFiscalHomeComponent;
  let fixture: ComponentFixture<PainelFiscalHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelFiscalHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelFiscalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
