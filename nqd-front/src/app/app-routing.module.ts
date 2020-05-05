import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  { path: 'histoire', component: AccueilComponent },
  { path: 'missions', component: AccueilComponent },
  { path: 'projet-associatif', component: AccueilComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
