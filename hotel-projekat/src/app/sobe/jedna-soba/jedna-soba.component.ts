import { Component, Input, OnInit } from '@angular/core';
import { Soba } from 'src/app/model/soba';
import { SobaService } from 'src/app/services/soba.service';

@Component({
  selector: 'app-jedna-soba',
  templateUrl: './jedna-soba.component.html',
  styleUrls: ['./jedna-soba.component.css']
})
export class JednaSobaComponent implements OnInit {

  @Input() soba: Soba;

  public korisnikLogovan: boolean = false;
  public adminLogovan: boolean = false;

  constructor(private sobaService: SobaService) { }

  ngOnInit(): void {
    if (localStorage.getItem("korisnik")) {
      this.korisnikLogovan = true;
    }
    if (localStorage.getItem("admin")) {
      this.adminLogovan = true;
    }
  }

  deleteSoba() {
    this.sobaService.deleteSoba(this.soba.idSoba).subscribe(resp => {
      if (resp==true) {
        console.log("Soba izbrisana")
        window.location.reload();
      }
    })
  }

}
