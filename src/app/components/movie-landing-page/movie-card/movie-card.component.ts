import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_BASE_URL,POSTER_SIZE, API_KEY, API_URL} from '../../../../config'
import { MovieService } from '../../../movie.service';
import {Router} from '@angular/router';
import { AuthService } from '../../../auth.service'
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
@Input() movie;

  imgUrl: string;

  constructor(private movieservice: MovieService,private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.imgUrl =`${IMAGE_BASE_URL}${POSTER_SIZE}${this.movie.poster_path}`;
  }

  onclick(){

    this.auth.user.subscribe().unsubscribe()
    if(User){
    var url=`${API_URL}movie/${this.movie.id}?api_key=${API_KEY}&language=en-us`;
    this.movieservice.getmovieDetails(url).subscribe((movieDetails)=>{
      console.log(movieDetails);
      this.router.navigate(['/movieDetail'],{state :{data:movieDetails}});
    })
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
