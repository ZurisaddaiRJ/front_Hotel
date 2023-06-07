import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  
  habitacionNumero!: number;
  dispositivos!: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.habitacionNumero = +params['habitacionNumero'];
      // Obtener los dispositivos correspondientes a la habitación utilizando this.habitacionNumero
      // Asignar los dispositivos a la variable this.dispositivos
    });
  }
}
