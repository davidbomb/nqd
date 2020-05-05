import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { RegisterComponent } from './components/register/register.component';

import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuiSommesNousComponent } from './components/nos-quartier-demain/qui-sommes-nous/qui-sommes-nous.component';
import { NotreFonctionnementComponent } from './components/nos-quartier-demain/notre-fonctionnement/notre-fonctionnement.component';
import { NosActionsComponent } from './components/nos-quartier-demain/nos-actions/nos-actions.component';
import { NousAiderComponent } from './components/nos-quartier-demain/nous-aider/nous-aider.component';
import { LocalisationComponent } from './components/hopital-prive-saint-barnabe/localisation/localisation.component';
import { HopitalComponent } from './components/hopital-prive-saint-barnabe/hopital/hopital.component';
import { ImpactEnvironnementauxEtUrbanistiqueComponent } from './components/hopital-prive-saint-barnabe/impact-environnementaux-et-urbanistique/impact-environnementaux-et-urbanistique.component';
import { DescriptionComponent } from './components/projet-alternatif/description/description.component';
import { LesEspacesComponent } from './components/projet-alternatif/les-espaces/les-espaces.component';
import { LeForumComponent } from './components/projet-alternatif/le-forum/le-forum.component';
import { LaGouvernanceDuTiersLieuComponent } from './components/projet-alternatif/la-gouvernance-du-tiers-lieu/la-gouvernance-du-tiers-lieu.component';
import { ImplicationCitoyenneComponent } from './components/projet-alternatif/implication-citoyenne/implication-citoyenne.component';
import { EtapeDeLaConstructionDuProjetComponent } from './components/intelligence-collective-et-droit-citoyen/etape-de-la-construction-du-projet/etape-de-la-construction-du-projet.component';
import { DroitCitoyenComponent } from './components/intelligence-collective-et-droit-citoyen/droit-citoyen/droit-citoyen.component';
import { MaintenantComponent } from './components/intelligence-collective-et-droit-citoyen/maintenant/maintenant.component';
import { ArticlesListComponent } from './components/presse/articles-list/articles-list.component';
import { ArticleService } from './services/article.service';
import { CreateArticleComponent } from './components/presse/create-article/create-article.component';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErrorPageComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    QuiSommesNousComponent,
    NotreFonctionnementComponent,
    NosActionsComponent,
    NousAiderComponent,
    LoginComponent,
    RegisterComponent,
    LocalisationComponent,
    HopitalComponent,
    ImpactEnvironnementauxEtUrbanistiqueComponent,
    DescriptionComponent,
    LesEspacesComponent,
    LeForumComponent,
    LaGouvernanceDuTiersLieuComponent,
    ImplicationCitoyenneComponent,
    EtapeDeLaConstructionDuProjetComponent,
    DroitCitoyenComponent,
    MaintenantComponent,
    // PresseComponent,
    ContactComponent,
    ArticlesListComponent,
    CreateArticleComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule

  ],
 
  providers: [
    UserService,
    AuthenticationService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
