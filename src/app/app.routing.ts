import { NgModule }             from '@angular/core';


import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeComponent } from './home/home.component';
import { loginComponent } from './login/login.component';
import { registroComponent } from './registro/registro.component';
import { multimediaComponent } from './multimedia/multimedia.component';
import { pinComponent } from './pin/pin.component';
import { TareasComponent }    from './Tareas/tareas.component';
//import { dashboardComponent }    from './dashboard/dashboard.component';




const appRoutes: Routes = [

{path: '',component: homeComponent},
{path: 'login',component: loginComponent},
{path: 'registro',component: registroComponent},
{path: 'multimedia',component: multimediaComponent},
{path: 'tareas',component: TareasComponent},
//{path: 'dashboard',component: dashboardComponent},


{path: 'pin',component: pinComponent},




{path: '**',component: homeComponent}

]

export const appRoutingProviders:any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



  @NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true} )],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { } 


