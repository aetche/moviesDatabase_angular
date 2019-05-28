import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { MovieDetail } from '../MovieDetail';

@Component({
  selector: 'app-movie-discover',
  templateUrl: './movie-discover.component.html',
  styleUrls: ['./movie-discover.component.scss']
})
export class MovieDiscoverComponent implements OnInit {
  movies: MovieDetail[];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
      this.getMoviesByGenre()
    })
  }
  getMoviesByGenre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMoviesByGenre(id).subscribe(movies => {
      this.movies = movies.results;
      console.log(this.movies);
    })
  };
}
