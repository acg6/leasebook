import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component'
import {ServiciosComponent} from './components/servicios/servicios.component'
import {AcercaComponent} from './components/acerca/acerca.component'
import {RegistroComponent} from './components/registro/registro.component'
import {PublicarLibroComponent} from './components/publicar-libro/publicar-libro.component'
import {LoggeadoComponent} from './components/loggeado/loggeado.component'
import {InfoLibroComponent} from './components/info-libro/info-libro.component'
import {LoginComponent} from './components/login/login.component'
const routes: Routes = [
  {
 path:"home",
 component:HomeComponent
  },
  {
    path:"Servicios",
    component: ServiciosComponent
  },
  {
    path:"Acerca",
    component:AcercaComponent
  },
  {
    path:"registro",
    component:RegistroComponent
  },

  {
    path:"login",
    component:LoginComponent
  },
   {
    path:"publicar",
    component:PublicarLibroComponent
  },
  {
    path:"loggeado",
    component:LoggeadoComponent
  },
  {
    path:"info",
    component:InfoLibroComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
