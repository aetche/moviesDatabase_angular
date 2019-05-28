import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  genres = [];
  constructor(private dataService: DataService) { 
    this.dataService.getGenresCategories().subscribe(data => {
      this.genres = data.genres;
      console.log(this.genres)
      console.log(this.genres[0])
    })
  }

  ngOnInit() {
  }

}
