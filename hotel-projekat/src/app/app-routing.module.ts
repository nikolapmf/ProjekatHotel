import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ContactComponent } from './info/contact/contact.component';
import { AddRezervacijaComponent } from './rezervacija/add-rezervacija/add-rezervacija.component';
import { RezervacijaListComponent } from './rezervacija/rezervacija-list/rezervacija-list.component';
import { CreateSobaComponent } from './sobe/create-soba/create-soba.component';
import { SobaListComponent } from './sobe/soba-list/soba-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddZalbaComponent } from './zalba/add-zalba/add-zalba.component';

const routes: Routes = [
  {path:'', redirectTo:'/sobe', pathMatch:'full'},
  {path:'sobe', component: SobaListComponent},
  {path:'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path:'register', component: RegisterComponent, canActivate: [AuthGuard]},
  {path:'add-soba', component: CreateSobaComponent},
  {path:'add-rezervacija', component: AddRezervacijaComponent},
  {path:'sve-rezervacije', component: RezervacijaListComponent},
  {path:'add-zalba', component: AddZalbaComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', redirectTo:'/sobe', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
