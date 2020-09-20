import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  static getmovies: any;

  movieData: any;
  searchMovies: EventEmitter<any>=new EventEmitter();

  constructor(private httpservice: HttpClient) { }

  getmovies(endpoint): Observable<any> {
    return this.httpservice.get<any>(endpoint);
  }

  getmovieDetails(endpoint): Observable<any> {
    return this.httpservice.get<any>(endpoint);
  }

  getcastDetails(endpoint): Observable<any> {
    return this.httpservice.get<any>(endpoint);
  }

  getRelatedDetails(endpoint): Observable<any> {
    return this.httpservice.get<any>(endpoint);
  }

}
