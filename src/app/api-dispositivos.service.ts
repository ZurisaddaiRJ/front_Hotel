import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dispositivo } from './habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDispositivosService {
  private apiUrlHabitaciones = 'http://localhost:8080/habitacion';

  constructor(private http: HttpClient) { }

  getDispositivos(numeroHabitacion: number): Observable<Dispositivo[]> {
    const url = `${this.apiUrlHabitaciones}/${numeroHabitacion}`;
    console.log('URL: ', url);
    return this.http.get<Dispositivo[]>(url);
  }

}
