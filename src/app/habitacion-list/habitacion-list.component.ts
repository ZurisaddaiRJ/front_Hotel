import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../habitacion.model';
import { HabitacionService } from '../habitacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-habitacion-list',
  templateUrl: './habitacion-list.component.html',
  styleUrls: ['./habitacion-list.component.css']
})
export class HabitacionListComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  constructor(private habitacionService: HabitacionService, private router: Router) { }

  ngOnInit(): void {
    this.getHabitaciones();
  }

  getHabitaciones() {
    this.habitacionService.getHabitaciones().subscribe(
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

  verDispositivos(habitacion: any) {
    // Navegar a la página de dispositivos y pasar el objeto de habitación como parámetro
    this.router.navigate(['/dispositivos', habitacion.numero]);
  }
}
