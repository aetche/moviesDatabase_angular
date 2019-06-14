import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MovieDetail } from '../MovieDetail';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: MovieDetail[];

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchMovie(input:string){
    let inputEncoded = input.replace(/\s/, '+');
    console.log(inputEncoded);
    this.router.navigate(['/movies/search', inputEncoded]);
  }

}
