import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Reporte1Component } from './reporte1/reporte1.component';
import { ReporteEsterilizacionComponent } from './reporte-esterilizacion/reporte-esterilizacion.component';
import { ReporteLavadoManualComponent } from './reporte-lavado-manual/reporte-lavado-manual.component';
import { ReporteLavadoAutomaticoComponent } from './reporte-lavado-automatico/reporte-lavado-automatico.component';
import { ReporteAlmacenComponent } from './reporte-almacen/reporte-almacen.component';


const routes: Routes = [
  {path: '1', component:Reporte1Component},
  {path: '2', component:ReporteEsterilizacionComponent},
  {path: '3', component:ReporteLavadoManualComponent},
  {path: '4', component:ReporteLavadoAutomaticoComponent},
  {path: '5', component:ReporteAlmacenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
