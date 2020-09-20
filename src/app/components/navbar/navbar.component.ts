import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private userSub:any;
  private user:string;
 
  loogedIn: boolean = false;

  constructor(private movieservice: MovieService, private auth: AuthService) { }
  searchString: string;

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.loogedIn =!user ? false :true
    });
  }

  onChange() {
    this.movieservice.searchMovies.emit(this.searchString);
  }

  onKeyPress() {
    this.movieservice.searchMovies.emit(this.searchString);
  }

  OnDestroy(){
    this.userSub.unsubscribe();
  }

}
