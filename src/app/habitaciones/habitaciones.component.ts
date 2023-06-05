import { Component, OnInit } from '@angular/core';

interface Habitacion {
  numero: number;
}

interface Piso {
  numero: number;
  habitaciones: Habitacion[];
}

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {

  pisos: Piso[] = [
    { numero: 1, habitaciones: [{ numero: 101 }, { numero: 102 }, { numero: 103 },{ numero: 104 }, { numero: 105 }, { numero: 106 },{ numero: 107 }, { numero: 108 }] },
    { numero: 2, habitaciones: [{ numero: 201 }, { numero: 202 }, { numero: 203 },{ numero: 204 }, { numero: 205 }, { numero: 206 },{ numero: 207 }, { numero: 208 }] },
    { numero: 3, habitaciones: [{ numero: 301 }, { numero: 302 }, { numero: 303 },{ numero: 304 }, { numero: 305 }, { numero: 306 },{ numero: 307 }, { numero: 308 }] },
    { numero: 4, habitaciones: [{ numero: 401 }, { numero: 402 }, { numero: 403 },{ numero: 404 }, { numero: 405 }, { numero: 406 },{ numero: 407 }, { numero: 408 }] },
    // Agrega más pisos y habitaciones según sea necesario
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
