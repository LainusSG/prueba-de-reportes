import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Reporte1Component } from './reporte1/reporte1.component';
import { ReporteEsterilizacionComponent } from './reporte-esterilizacion/reporte-esterilizacion.component';
import { ReporteLavadoManualComponent } from './reporte-lavado-manual/reporte-lavado-manual.component';
import { ReporteLavadoAutomaticoComponent } from './reporte-lavado-automatico/reporte-lavado-automatico.component';
import { ReporteAlmacenComponent } from './reporte-almacen/reporte-almacen.component';


import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    Reporte1Component,
    ReporteEsterilizacionComponent,
    ReporteLavadoManualComponent,
    ReporteLavadoAutomaticoComponent,
    ReporteAlmacenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
