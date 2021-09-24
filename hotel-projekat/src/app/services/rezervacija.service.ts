import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rezervacija } from '../model/rezervacija';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  private rezervacije: Rezervacija[]

  host = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  getSveRezervacije(): Observable<Rezervacija[]> {
    return this.httpClient.get<Rezervacija[]>(this.host + "getSveRezervacije")
  }

  addRezervacija(username: string, idSoba: string, datum, brojNocenja): Observable<any> {
    let brojNocenjaStr = brojNocenja+""
    let parametri = new HttpParams()
    .set("username", username)
    .set("idSoba", idSoba)
    .set("datum", datum)
    .set("brojNocenja", brojNocenja)

    return this.httpClient.post(this.host + "addRezervacija", parametri)
  }
}
