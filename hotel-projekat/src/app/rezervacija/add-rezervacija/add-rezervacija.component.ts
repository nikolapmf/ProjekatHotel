import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rezervacija } from 'src/app/model/rezervacija';
import { RezervacijaService } from 'src/app/services/rezervacija.service';

@Component({
  selector: 'app-add-rezervacija',
  templateUrl: './add-rezervacija.component.html',
  styleUrls: ['./add-rezervacija.component.css']
})
export class AddRezervacijaComponent implements OnInit {

  public ime: string = ""
  public prezime: string = ""
  public username: string = ""
  public idSoba: string = ""
  public cena: number
  public datum: Date
  public brojNocenja: number
  public cenaStr: string


  constructor(private rezervacijaService: RezervacijaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ime = localStorage.getItem("imeKorisnika")
    this.prezime = localStorage.getItem("prezimeKorisnika")
    this.username = localStorage.getItem("korisnik")

    this.route.queryParams.subscribe(param => {
      this.idSoba = param.idSoba
    })
    this.route.queryParams.subscribe(param => {
      this.cena = param.cena
    })

  }

  addRezervacija() {
    alert("Dodaje se rez")
    this.rezervacijaService.addRezervacija(this.username, this.idSoba, this.datum, this.brojNocenja).subscribe(resp => {
      alert("Uspesno dodata rezervacija! Uskoro cete dobiti potvrdu rezervacije na email.")
      this.router.navigate(['sobe'])
    })
  }

}
