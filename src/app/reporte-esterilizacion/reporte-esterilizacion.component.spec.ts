import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEsterilizacionComponent } from './reporte-esterilizacion.component';

describe('ReporteEsterilizacionComponent', () => {
  let component: ReporteEsterilizacionComponent;
  let fixture: ComponentFixture<ReporteEsterilizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteEsterilizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteEsterilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
