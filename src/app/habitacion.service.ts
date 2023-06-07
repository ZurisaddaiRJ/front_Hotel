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

  getHabitaciones(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
