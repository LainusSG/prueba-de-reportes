import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteLavadoManualComponent } from './reporte-lavado-manual.component';

describe('ReporteLavadoManualComponent', () => {
  let component: ReporteLavadoManualComponent;
  let fixture: ComponentFixture<ReporteLavadoManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteLavadoManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReporteLavadoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
