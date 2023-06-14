import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDispositivosService } from '../api-dispositivos.service';
import { Dispositivo } from '../habitacion.model';
import { HabitacionService } from '../habitacion.service';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {
  habitacion!: any;
  habitacionNumero!: number;
  dispositivosObtenidos!: Dispositivo[];
  private dispositivosSubscription: Subscription | undefined;

  constructor(
    private http: HttpClient,
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
        this.startPolling();
      }
    });
    /*this.route.params.subscribe(params => {
      this.habitacionNumero = +params['habitacionNumero']
    });*/

  }

  ngOnDestroy() {
    this.stopPolling();
  }

  getDispositivos() {
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

  startPolling() {
    this.dispositivosSubscription = interval(5000).subscribe(() => {
      this.getDispositivos();
    });
  }

  stopPolling() {
    if (this.dispositivosSubscription) {
      this.dispositivosSubscription.unsubscribe();
    }
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

  //boton para apagar dispositivos
  enviarDatos(dispositivo: any, n:any) {
    console.log(n.habitacionNumero);
    const datos = {
      dispositivo: dispositivo,
      numero: n,
    };

    this.http.post('http://localhost:3001/enviar', datos)
      .subscribe((response) => {
        console.log('Datos enviados al broker:', response);
      });
  }

}
