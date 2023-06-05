import { Component, OnInit } from '@angular/core';
import { HabitacionesComponent } from '../habitaciones/habitaciones.component';


@Component({
  selector: 'app-dispositivos-habi',
  templateUrl: './dispositivos-habi.component.html',
  styleUrls: ['./dispositivos-habi.component.css'],
})
export class DispositivosHabiComponent implements OnInit {

  dispositivos = [
    { nombre: 'Televisor', estado: false },
    { nombre: 'Luces', estado: true },
    { nombre: 'Aire Acondicionado', estado: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
