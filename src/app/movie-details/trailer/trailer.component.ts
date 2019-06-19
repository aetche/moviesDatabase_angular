import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {

  @Input() movieId:number;
  url: string = '';

  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getTrailer(this.movieId);
  }

  getTrailer(id): void {
    this.dataService.getTrailer(id).subscribe(trailer => {
      this.url = `https://www.youtube.com/embed/${trailer.results[0].key}`;
    });
  }
}
