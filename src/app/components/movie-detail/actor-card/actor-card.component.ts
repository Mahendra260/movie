import { Component, OnInit, Input } from '@angular/core';
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../../../config';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {
 movieimgUrl;
 character;

  @Input ()
  cast;
  castDetails: [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.movieimgUrl=`${IMAGE_BASE_URL}${POSTER_SIZE}${this.cast.profile_path}`;
  }

}
