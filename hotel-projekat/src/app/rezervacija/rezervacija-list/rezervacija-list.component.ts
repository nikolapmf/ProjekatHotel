import { Component, Input, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/model/korisnik';
import { Rezervacija } from 'src/app/model/rezervacija';
import { Soba } from 'src/app/model/soba';
import { RezervacijaService } from 'src/app/services/rezervacija.service';

@Component({
  selector: 'app-rezervacija-list',
  templateUrl: './rezervacija-list.component.html',
  styleUrls: ['./rezervacija-list.component.css']
})
export class RezervacijaListComponent implements OnInit {

  public rezervacije: Rezervacija[] = [];
  // public korisnik: Korisnik[] = []
  // public soba: Soba[] = []

  constructor(private rezervacijaService: RezervacijaService) { }

  ngOnInit(): void {
    this.rezervacijaService.getSveRezervacije().subscribe(resp => {this.rezervacije = resp})
    // console.log(this.rezervacije)
    // this.rezervacije.forEach(element => {
    //   this.korisnik.push(element.korisnik)
    //   this.soba.push(element.soba)
    // });
    // console.log(this.korisnik)
    // console.log(this.soba)
  }

}
