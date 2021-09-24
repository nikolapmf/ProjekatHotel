import { Injectable } from '@angular/core';
import { Soba } from '../model/soba';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { of as ObservableOf } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SobaService {

  private sobe: Array<Soba> = []

  host = "http://localhost:8080/api/"

  constructor(private httpClient: HttpClient) {

  }

  getSobe(): Observable<Soba[]> {
    return this.httpClient.get<Soba[]>(this.host + "getSveSobe")
  }

  dodajSobu(soba: Soba): Observable<Soba> {
    let parametri = new HttpParams()
      .set("brojKreveta", soba.brojKreveta)
      .set("tipSobe", soba.tipSobe)
      .set("kvadratura", soba.kvadratura)
      .set("cena", soba.cena)
      .set("imgUrl", soba.imgUrl);
    
    return this.httpClient.post<Soba>(this.host + "addSoba", parametri)
  }

  deleteSoba(idSoba:string): Observable<any> {
    let params = new HttpParams().set("idSoba", idSoba)
    return this.httpClient.post(this.host + "deleteSoba", params);
  }
}
