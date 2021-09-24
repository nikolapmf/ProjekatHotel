import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soba } from 'src/app/model/soba';
import { SobaService } from 'src/app/services/soba.service';

@Component({
  selector: 'app-create-soba',
  templateUrl: './create-soba.component.html',
  styleUrls: ['./create-soba.component.css']
})
export class CreateSobaComponent implements OnInit {

  public soba: Soba = new Soba();

  constructor(private sobaService: SobaService, private router: Router) { }

  ngOnInit(): void {
  }

  addSoba(sobaForm) {
    if (sobaForm.invalid) {
      alert("Invalid Form")
    }
    else {
      this.sobaService.dodajSobu(this.soba).subscribe(resp => {
        alert("Dodata soba!")
        this.router.navigate(['sobe'])
      })
    }
  }
}
