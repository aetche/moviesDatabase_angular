import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetail } from './MovieDetail';
import { MoviesList } from './MoviesList';
import { Genre } from './Genre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey:string = 'dc03e0f0538aa7216969a8799672877f';
  private urlMovieDB:string = 'https://api.themoviedb.org/3';

  constructor(private http:HttpClient) { 
    console.log('Service is working...')
  }
  getGenresCategories(): Observable<Genre> {
    return this.http.get<Genre>(`${this.urlMovieDB}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
  }

  getMoviesByGenre(id: number): Observable<MoviesList> {
    return this.http.get<MoviesList>(`${this.urlMovieDB}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`);
  }

  getDetails(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=en-US`);
  }

  getPopular(): Observable<MoviesList> {
    return this.http.get<MoviesList>(`${this.urlMovieDB}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`);
  }
}
