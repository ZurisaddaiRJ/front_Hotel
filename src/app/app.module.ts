import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { EstadoHabitacionesComponent } from './estado-habitaciones/estado-habitaciones.component';
import { DispositivosHabiComponent } from './dispositivos-habi/dispositivos-habi.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { HabitacionService } from './habitacion.service';

import { Routes, RouterModule } from '@angular/router';
import { DispositivosComponent } from './dispositivos/dispositivos.component';

const routes: Routes = [
  // Otras rutas...
  { path: 'dispositivos/:habitacionNumero', component: DispositivosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    EstadoHabitacionesComponent,
    DispositivosHabiComponent,
    HabitacionListComponent,
    DispositivosComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    HttpClientModule
    
  ],
  providers: [
    HabitacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
