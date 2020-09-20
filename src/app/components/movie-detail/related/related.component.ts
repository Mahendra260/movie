import { Component, OnInit, Input } from '@angular/core';
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../../../config';
import { MovieService } from '../../../movie.service';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {
  @Input() movieId: string;
  relatedMovies: any = [];
  posterimgUrl: string = `${IMAGE_BASE_URL}${BACKDROP_SIZE}`;
  imgUrl = `${IMAGE_BASE_URL}${POSTER_SIZE}`;

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    var relatedmovieUrl = `${API_URL}movie/${this.movieId}/similar?api_key=${API_KEY}&language=en-us&page=1`;
    this.movieservice.getRelatedDetails(relatedmovieUrl).subscribe((related) => {
      this.relatedMovies = related.results;
      console.log(related);
    })

  }
}
