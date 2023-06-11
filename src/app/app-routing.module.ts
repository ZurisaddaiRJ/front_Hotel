import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';

const routes: Routes = [
  { path: 'dispositivos', component: DispositivosComponent },
  { path: 'habitaciones-list', component: HabitacionListComponent},
  { path: 'dispositivos/:numero', component: DispositivosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
