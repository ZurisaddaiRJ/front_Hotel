import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstadoHabitacionesComponent } from './estado-habitaciones/estado-habitaciones.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HabitacionListComponent } from './habitacion-list/habitacion-list.component';
import { HabitacionService } from './habitacion.service';

import { Routes, RouterModule } from '@angular/router';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { ApiDispositivosService } from './api-dispositivos.service';

const routes: Routes = [
  // Otras rutas...
  { path: 'dispositivos/:habitacionNumero', component: DispositivosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EstadoHabitacionesComponent,
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
    HabitacionService,
    ApiDispositivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
