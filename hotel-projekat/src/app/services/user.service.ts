import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Korisnik } from '../model/korisnik';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    let params = new HttpParams()
      .set("username", username)
      .set("password", password)
      
    return this.httpClient.post<Korisnik>(this.host + "login", params);
  }

  register(korisnik: Korisnik): Observable<any> {
    return this.httpClient.post(this.host + "register", korisnik)
  }

  addZalba(username: string, zalba: string) {
    let parametri = new HttpParams()
      .set("username", username)
      .set("zalba", zalba)
    return this.httpClient.post(this.host + "addZalba", parametri)
  }

}
