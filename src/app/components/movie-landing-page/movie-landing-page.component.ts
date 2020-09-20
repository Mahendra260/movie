import { Component, OnInit } from '@angular/core';
import {MovieService } from '../../movie.service';
import {API_URL,API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE} from '../../../config';

@Component({
  selector: 'app-movie-landing-page',
  templateUrl: './movie-landing-page.component.html',
  styleUrls: ['./movie-landing-page.component.css']
})
export class MovieLandingPageComponent implements OnInit {
  movieUrl: string = '';
  movieData: any;
  showcaseImgUrl: string= '';
  filterMoviesData: any;
  page:number=1;
  

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.movieUrl=`${API_URL}movie/popular?api_key=${API_KEY}&language=en-us&page=1`;
    this.movieservice.getmovies(this.movieUrl).subscribe((data)=>{
      console.log(data);
      this.movieData=data.results;
      this.showcaseImgUrl=`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.movieData[0].backdrop_path}`;
      
    })
  
  }

  getMovies(){
    this.page++
    this.movieUrl =`${API_URL}movie/popular?api_key=${API_KEY}&language=en_us&page=${this.page}`;
    this.movieservice.getmovies(this.movieUrl).subscribe((data)=>{
      data.results.forEach((movie)=>{
        this.movieData.push(movie);
        this.filterMoviesData.push(movie)
      })
    })
  }

  filterMovies(){
    this.movieservice.searchMovies.subscribe((data)=>{
      console.log(data)
      if(data!==""){
      this.filterMoviesData=this.movieData.filter(movie => movie.title.toLowerCase().includes(data.toLowerCase()));
      }else if(data===""){
        this.filterMoviesData=this.movieData;
      }
      console.log(this.movieData)
    })
  }
}
