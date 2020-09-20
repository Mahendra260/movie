import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component'
import { MovieCardComponent } from './components/movie-landing-page/movie-card/movie-card.component';
import { MovieLandingPageComponent } from './components/movie-landing-page/movie-landing-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ActorCardComponent } from './components/movie-detail/actor-card/actor-card.component';
import { ShowcaseComponent } from './components/common/showcase/showcase.component';
import { RelatedComponent } from './components/movie-detail/related/related.component';



@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieCardComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    MovieLandingPageComponent,
    FavoritesComponent,
    ActorCardComponent,
    ShowcaseComponent,
    RelatedComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
