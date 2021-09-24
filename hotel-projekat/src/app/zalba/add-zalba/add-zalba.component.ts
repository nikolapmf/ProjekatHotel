import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-zalba',
  templateUrl: './add-zalba.component.html',
  styleUrls: ['./add-zalba.component.css']
})
export class AddZalbaComponent implements OnInit {

  public ime: string = ""
  public prezime: string = ""
  public username: string = ""
  public zalba: string = ""

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.ime = localStorage.getItem("imeKorisnika")
    this.prezime = localStorage.getItem("prezimeKorisnika")
    this.username = localStorage.getItem("korisnik")
  }

  addZalba() {
    this.userService.addZalba(this.username, this.zalba).subscribe(resp => {
      alert("Poslata zalba!")
      this.router.navigate(['sobe'])
    })
  }

}
