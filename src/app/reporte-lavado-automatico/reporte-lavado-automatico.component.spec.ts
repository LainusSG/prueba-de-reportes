import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteLavadoAutomaticoComponent } from './reporte-lavado-automatico.component';

describe('ReporteLavadoAutomaticoComponent', () => {
  let component: ReporteLavadoAutomaticoComponent;
  let fixture: ComponentFixture<ReporteLavadoAutomaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteLavadoAutomaticoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteLavadoAutomaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
