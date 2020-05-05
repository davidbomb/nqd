import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/authentication.service';

//Rubrique : Nos Quartiers Demain
import { NosActionsComponent } from './components/nos-quartier-demain/nos-actions/nos-actions.component'
import { NousAiderComponent } from './components/nos-quartier-demain/nous-aider/nous-aider.component'
import { QuiSommesNousComponent } from './components/nos-quartier-demain/qui-sommes-nous/qui-sommes-nous.component'
import { NotreFonctionnementComponent } from './components/nos-quartier-demain/notre-fonctionnement/notre-fonctionnement.component'

//Rubrique : L'Hopital privé saint barnabé
import { HopitalComponent } from './components/hopital-prive-saint-barnabe/hopital/hopital.component'
import { ImpactEnvironnementauxEtUrbanistiqueComponent } from './components/hopital-prive-saint-barnabe/impact-environnementaux-et-urbanistique/impact-environnementaux-et-urbanistique.component'
import { LocalisationComponent } from './components/hopital-prive-saint-barnabe/localisation/localisation.component'

//Rubrique : Projet Alternative
import { DescriptionComponent } from './components/projet-alternatif/description/description.component'
import { ImplicationCitoyenneComponent } from './components/projet-alternatif/implication-citoyenne/implication-citoyenne.component'
import { LaGouvernanceDuTiersLieuComponent } from './components/projet-alternatif/la-gouvernance-du-tiers-lieu/la-gouvernance-du-tiers-lieu.component'
import { LeForumComponent } from './components/projet-alternatif/le-forum/le-forum.component'
import { LesEspacesComponent } from './components/projet-alternatif/les-espaces/les-espaces.component'

//Rubrique : Intelligence collective et droit citoyen
import { DroitCitoyenComponent } from './components/intelligence-collective-et-droit-citoyen/droit-citoyen/droit-citoyen.component'
import { EtapeDeLaConstructionDuProjetComponent } from './components/intelligence-collective-et-droit-citoyen/etape-de-la-construction-du-projet/etape-de-la-construction-du-projet.component'
import { MaintenantComponent } from './components/intelligence-collective-et-droit-citoyen/maintenant/maintenant.component'

import { ContactComponent } from './components/contact/contact.component';
import { ArticlesListComponent } from './components/presse/articles-list/articles-list.component';
import { CreateArticleComponent } from './components/presse/create-article/create-article.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'nos-actions', component: NosActionsComponent },
  { path: 'nous-aider', component: NousAiderComponent },
  { path: 'qui-sommes-nous', component: QuiSommesNousComponent },
  { path: 'notre-fonctionnement', component: NotreFonctionnementComponent },

  { path: 'hopital', component: HopitalComponent },
  { path: 'impact-environnementaux-et-urbanistique', component: ImpactEnvironnementauxEtUrbanistiqueComponent },
  { path: 'localisation', component: LocalisationComponent },

  { path: 'description', component: DescriptionComponent },
  { path: 'implication-citoyenne', component: ImplicationCitoyenneComponent },
  { path: 'la-gouvernance-du-tiers-lieu', component: LaGouvernanceDuTiersLieuComponent },
  { path: 'le-forum', component: LeForumComponent },
  { path: 'les-espaces', component: LesEspacesComponent },

  { path: 'droit-citoyen', component: DroitCitoyenComponent },
  { path: 'etape-de-la-construction-du-projet', component: EtapeDeLaConstructionDuProjetComponent },
  { path: 'maintenant', component: MaintenantComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'nouvel-article', component: CreateArticleComponent },




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
