import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitacion } from './habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private apiUrl = 'http://localhost:8080/habitacion';

  constructor(private http: HttpClient) { }

  getHabitacionesList(): Observable<any> {
    //console.log(JSON.stringify(this.http.get<any>(this.apiUrl)));
    return this.http.get<any>(this.apiUrl);
  }

  getHabitacionId(numero: number): Observable<any> {
    //console.log(JSON.stringify(this.http.get<any>(`${this.apiUrl}/${numero}`)));
    return this.http.get<any>(`${this.apiUrl}/${numero}`);
  }

  getDispositivos(numero: number): Observable<any> {
    const url = `${this.apiUrl}/${numero}/dispositivo`;
    return this.http.get<any>(url);
  }
}
