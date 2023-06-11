import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDispositivosService } from '../api-dispositivos.service';
import { Dispositivo } from '../dispositivo.model';
import { DispositivoResponse } from '../dispositivo.model';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  
  habitacionNumero!: number;
  dispositivos: Dispositivo[] = [];

  constructor(
    private dispositivoService: ApiDispositivosService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.habitacionNumero = +params['numero'];
      // Obtener los dispositivos correspondientes a la habitación utilizando this.habitacionNumero
      // Asignar los dispositivos a la variable this.dispositivos
      this.getDispositivos();
    });
  }

  getDispositivos() {
    this.dispositivoService.getDispositivos(this.habitacionNumero).subscribe(
      dispositivos=> {
        if (Array.isArray(dispositivos)) {
          this.dispositivos = dispositivos;
        } else {
          this.dispositivos = [dispositivos];
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getTipoDispositivo(tipo: string): string {
    console.log(tipo);
    if (tipo === 'TV') {
      return 'Televisor';
    } else if (tipo === 'LUZ') {
      return 'Luces';
    } else {
      return 'Aire Acondicionado';
    }
  }

  getColorClass(estadoDispositivo: number): string {
    console.log(estadoDispositivo);
    if (estadoDispositivo === 0) {
      return 'green-button';
    } else if (estadoDispositivo === 1) {
      return 'blue-button';
    } else {
      return 'red-button';
    }
  }

}
