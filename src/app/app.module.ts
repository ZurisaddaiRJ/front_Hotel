import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { EstadoHabitacionesComponent } from './estado-habitaciones/estado-habitaciones.component';
import { DispositivosHabiComponent } from './dispositivos-habi/dispositivos-habi.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HabitacionesComponent,
    EstadoHabitacionesComponent,
    DispositivosHabiComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
