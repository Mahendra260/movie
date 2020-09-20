import { NgModule } from '@angular/core';
import { Routes,RouterModule,CanActivate} from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component'
import { MovieCardComponent } from './components/movie-landing-page/movie-card/movie-card.component';
import { MovieLandingPageComponent } from './components/movie-landing-page/movie-landing-page.component'
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ActorCardComponent } from './components/movie-detail/actor-card/actor-card.component';
import { ShowcaseComponent } from './components/common/showcase/showcase.component';
import { AuthGuardService} from './auth-guard.service';


const routes: Routes = [

  {path:'',component:MovieLandingPageComponent},
  {path:'Home',component:MovieLandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'movieDetail',component:MovieDetailComponent},
  {path:'Favorites',component:FavoritesComponent,canActivate:[AuthGuardService]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
