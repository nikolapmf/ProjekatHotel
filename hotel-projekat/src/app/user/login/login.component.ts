import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public username: string = '';
  public password: string = '';

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.username, this.password).subscribe((resp:any) => {
      if (resp.username=="") {
        alert("Nije ispravan username ili password");
      }
      else {
        if (resp.idUloga == 2) {
          localStorage.setItem("imeKorisnika", resp.ime)
          localStorage.setItem("prezimeKorisnika", resp.prezime)
          localStorage.setItem("korisnik", resp.username)
        }
        else {
          localStorage.setItem("imeKorisnika", resp.ime)
          localStorage.setItem("prezimeKorisnika", resp.prezime)
          localStorage.setItem("admin", resp.username)
        }
        this.router.navigate(['sobe']).then(() => {
          window.location.reload();
        })
      }
    })
  }

}
