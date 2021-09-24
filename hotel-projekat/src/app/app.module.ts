import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaService } from './services/soba.service';
import { JednaSobaComponent } from './sobe/jedna-soba/jedna-soba.component';
import { SobaListComponent } from './sobe/soba-list/soba-list.component';
import { CreateSobaComponent } from './sobe/create-soba/create-soba.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptor } from './services/tokenInterceptor';
import { AddRezervacijaComponent } from './rezervacija/add-rezervacija/add-rezervacija.component';
import { RezervacijaListComponent } from './rezervacija/rezervacija-list/rezervacija-list.component';
import { AddZalbaComponent } from './zalba/add-zalba/add-zalba.component';
import { ContactComponent } from './info/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    JednaSobaComponent,
    SobaListComponent,
    CreateSobaComponent,
    LoginComponent,
    RegisterComponent,
    AddRezervacijaComponent,
    RezervacijaListComponent,
    AddZalbaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SobaService,
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
