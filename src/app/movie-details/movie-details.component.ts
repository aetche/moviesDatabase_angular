import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { MovieDetail } from '../MovieDetail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetail: MovieDetail;
  voteAverage: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { 
  }
  
  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getDetails(id).subscribe(movie => {
      this.movieDetail = movie;
      this.voteAverage = movie.vote_average;
      console.log('Detalles: ',this.movieDetail);
    })
  }
  goBack(): void {
    this.location.back();
  }
}
