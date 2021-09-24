import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/model/korisnik';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public korisnik: Korisnik = new Korisnik();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(registerForm) {
    if (registerForm.invalid) {
      alert("Invalid form")
    } else {
      this.userService.register(this.korisnik).subscribe(resp => {
        if (resp==false) {
          alert("Korisnik vec postoji!")
        } else {
          alert("Uspesno registrovanje!")
          this.router.navigate(['login'])
        }
      })
    }
  }

}
