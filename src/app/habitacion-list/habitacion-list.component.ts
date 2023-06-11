import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../habitacion.model';
import { HabitacionService } from '../habitacion.service';
import { ApiDispositivosService } from '../api-dispositivos.service';
import { Router } from '@angular/router';
import { DispositivoResponse, Dispositivo } from '../dispositivo.model';


@Component({
  selector: 'app-habitacion-list',
  templateUrl: './habitacion-list.component.html',
  styleUrls: ['./habitacion-list.component.css']
})
export class HabitacionListComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  dispositivos: Dispositivo[] = [];

  constructor(private habitacionService: HabitacionService,
    private router: Router,
    private dispositivoService: ApiDispositivosService) { }

  ngOnInit(): void {
    this.getHabitaciones();
  }

  getHabitaciones() {
    this.habitacionService.getHabitacionesList().subscribe(
      habitaciones => {
        this.habitaciones = habitaciones.content;
      },
      error => {
        console.log(error);
      }
    );
  }

  getColorClass(numeroHabitacion: number): string {
    console.log(numeroHabitacion);
    if (numeroHabitacion === 1) {
      return 'green-button';
    } else if (numeroHabitacion === 2) {
      return 'blue-button';
    } else {
      return 'red-button';
    }
  }

  getDispositivos(numeroHabitacion: number) {
    this.dispositivoService.getDispositivos(numeroHabitacion).subscribe(
      dispositivos => {
        if (Array.isArray(dispositivos)) {
          this.dispositivos = dispositivos;
        } else {
          this.dispositivos = [dispositivos];
        }
        console.log(dispositivos);
      },
      error => {
        console.log(error);
        this.router.navigate(['/dispositivos']);
      }
    );
  }
}
