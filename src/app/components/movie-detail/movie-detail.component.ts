import { Component, OnInit, Input } from '@angular/core';
import {API_KEY,API_URL,IMAGE_BASE_URL,BACKDROP_SIZE,POSTER_SIZE} from '../../../config';
import { MovieService} from '../../movie.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieData;

  showcaseImgUrl: string;
  movieDetails: any;
  posterImgUrl: string;
  castDetails: [];
  showCast: boolean;
  showLike:boolean;


  constructor( private movieservice: MovieService) { }

  ngOnInit(){
    
    this.movieDetails=window.history.state.data;
    console.log(this.movieDetails);

    this.posterImgUrl = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.movieDetails.backdrop_path}`;
    this.showcaseImgUrl=`${IMAGE_BASE_URL}${POSTER_SIZE}${this.movieDetails.poster_path}`
  }
  onClick(){
    var castUrl=`${API_URL}movie/${this.movieDetails.id}/credits?api_key=${API_KEY}`;
    this.movieservice.getcastDetails(castUrl).subscribe((cast)=>{
      this.castDetails=cast.cast;
      console.log(cast)
    })
  }

  addToFavorites(){
    this.showLike=true;
    console.log(this.showLike)
  }
  removefromFavorites(){
    this.showLike=true;
  }

}
