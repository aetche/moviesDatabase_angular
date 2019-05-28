import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MoviesList } from '../MoviesList';
import { MovieDetail } from '../MovieDetail';

@Component({
  selector: 'app-movie-popular',
  templateUrl: './movie-popular.component.html',
  styleUrls: ['./movie-popular.component.scss']
})
export class MoviePopularComponent implements OnInit {
  movies: MovieDetail[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPopular();
  }

  getPopular(): void {
    this.dataService.getPopular().subscribe(movies => {
      let array = movies.results;
      this.movies = array;
      console.log(this.movies);
    })
  }
}
