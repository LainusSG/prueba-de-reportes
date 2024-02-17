import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAlmacenComponent } from './reporte-almacen.component';

describe('ReporteAlmacenComponent', () => {
  let component: ReporteAlmacenComponent;
  let fixture: ComponentFixture<ReporteAlmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteAlmacenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteAlmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
