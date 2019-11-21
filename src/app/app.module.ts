import { Component, OnInit } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {LoginService} from './services/login.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { routing, appRoutingProviders }   from './app.routing';

import { AppComponent } from './app.component';
import { homeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { registroComponent } from './registro/registro.component';
import { multimediaComponent } from './multimedia/multimedia.component';
import { pinComponent } from './pin/pin.component';
import { NavbarComponent }    from './navbar/navbar.component';
import { TareasComponent }    from './Tareas/tareas.component';
//import { dashboardComponent }    from './dashboard/dashboard.component';






//servicios 
import { MultService } from './multimediaD/mult.service';

 import  { DataApiService } from './services/data-api.service';
 import  { UsuarioService } from './services/usuario.service';
import { MultimediaDModule } from './multimediaD/multimedia-d.module';
 import  { MessageService } from './message.service';





 

 
/* Feature Components */

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    loginComponent,
    registroComponent,
    multimediaComponent,
    pinComponent,
    NavbarComponent, 
     TareasComponent,
     ///dashboardComponent,

    
     
     
   
    
    
  ],
  imports: [
    BrowserModule,
    routing,
     FormsModule,
    HttpClientModule,
    MultimediaDModule,
     BrowserAnimationsModule,
   
  ],
  providers: [appRoutingProviders, LoginService,UserService, DataApiService, MultService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }


