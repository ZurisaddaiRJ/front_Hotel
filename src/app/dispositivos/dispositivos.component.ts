import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDispositivosService } from '../api-dispositivos.service';
import { Dispositivo } from '../habitacion.model';
import { HabitacionService } from '../habitacion.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  habitacion!: any;
  habitacionNumero!: number;
  dispositivosObtenidos!: Dispositivo[];

  constructor(
    private dispositivoService: ApiDispositivosService,
    private habitacionService: HabitacionService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const numeroHabitacion = +params['numeroHabitacion'];
      // Obtener los dispositivos correspondientes a la habitación utilizando this.habitacionNumero
      // Asignar los dispositivos a la variable this.dispositivos
      if (!isNaN(numeroHabitacion)) {
        this.habitacionNumero = numeroHabitacion;
        this.getDispositivos();
      }
    });
    /*this.route.params.subscribe(params => {
      this.habitacionNumero = +params['habitacionNumero']
    });*/

  }

  getDispositivos() {
    /*this.dispositivoService.getDispositivos(this.habitacionNumero).subscribe(
      dispositivos=> {
        console.log('Dispositivos obtenidos:', dispositivos);
        if (Array.isArray(dispositivos)) {
          this.dispositivosObtenidos = dispositivos;
        } else {
          this.dispositivosObtenidos = [dispositivos];
        }
      },
      error => {
        console.log('Error:', error);
      }
    );*/
    this.habitacionService.getDispositivos(this.habitacionNumero).subscribe(
      dispositivos => {
        console.log('Dispositivos obtenidos:', dispositivos);
        if (Array.isArray(dispositivos)) {
          this.dispositivosObtenidos = dispositivos;
        } else {
          this.dispositivosObtenidos = [dispositivos];
        }
      },
      error => {
        console.log('Error:', error);
      }
    );
  }

  getTipoDispositivo(tipo: string): string {
    console.log(tipo);
    const tipoLowerCase = tipo.toLowerCase();

    if (tipoLowerCase === 'Telvision') {
      return 'Television';
    } else if (tipoLowerCase === 'Aire Acondicionado') {
      return 'Aire acondicionado';
    } else if (tipoLowerCase === 'Luz') {
      return 'Luces';
    } else {
      return 'Desconocido';
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
