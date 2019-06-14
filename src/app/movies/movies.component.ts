import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../MovieDetail';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: MovieDetail[];
  moviesType: Params;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.moviesType = params;
      this.getMovies(params);
    })
  }

  getMovies(params): void {
    console.log('params', params);
    if(params.search){
      this.dataService.getSearch(params.input).subscribe(movies => {
        this.movies = movies.results;
      })
    }
    else if(params.id){
      this.dataService.getMoviesByGenre(params.id).subscribe(movies => {
        this.movies = movies.results;
      })
    }
    else if(params.category){
      console.log(params.category)
      this.dataService.getMovies(params.category).subscribe(movies => {
        this.movies = movies.results;
        console.log('movies', movies.results);
      })
    }
  }
}
