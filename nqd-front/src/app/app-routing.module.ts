import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/authentication.service';


const routes: Routes = [
  // { path: '/', component:  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'histoire', component: AccueilComponent },
  { path: 'missions', component: AccueilComponent },
  {
    path: 'projet-associatif',
    component: RegisterComponent,
    canActivate: [AuthenticationService]
  },
  {
    path        : '**',
    pathMatch   : 'full',
    component   : ErrorPageComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
