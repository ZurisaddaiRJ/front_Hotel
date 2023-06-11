import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo } from './habitacion.model';
import { DispositivoResponse } from './dispositivo.model';
@Injectable({
  providedIn: 'root'
})
export class ApiDispositivosService {
  private apiUrl = 'http://localhost:8080/dispositivo';
  private apiUrlHabitaciones = 'http://localhost:8080/habitacion';
  dispositivos: Dispositivo[] = [];

  constructor(private http: HttpClient) { }

  getDispositivos(numeroHabitacion: number): Observable<Dispositivo[]> {
    const url = `${this.apiUrlHabitaciones}/${numeroHabitacion}/${this.dispositivos}`;
    return this.http.get<Dispositivo[]>(url);
  }

}
