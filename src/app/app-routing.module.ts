import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivosHabiComponent } from './dispositivos-habi/dispositivos-habi.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';

const routes: Routes = [
  { path: '', redirectTo: '/dispositivos-habi', pathMatch: 'full' },
  { path: 'dispositivos-habi', component: DispositivosHabiComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'dispositivos/:habitacionNumero', component: DispositivosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
