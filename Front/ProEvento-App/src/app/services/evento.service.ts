import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';
import { Observable } from 'rxjs';

@Injectable()
export class EventoService {
 urlBase = 'https://localhost:7142/api/evento';
constructor(private http:HttpClient) { }

public getEventos(): Observable<Evento[]>{
  return this.http.get<Evento[]>(this.urlBase)
}

public getEventosByTema(tema:string): Observable<Evento[]>{
  return this.http.get<Evento[]>(`${this.urlBase}/${tema}/tema`)
}

public getEventoById(id:number): Observable<Evento>{
  return this.http.get<Evento>(`${this.urlBase}/${id}`)
}


}
