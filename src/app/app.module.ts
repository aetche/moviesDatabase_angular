import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DataService } from './data.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieDiscoverComponent } from './movie-discover/movie-discover.component';
import { MenuDiscoverComponent } from './menu-discover/menu-discover.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MovieDetailsComponent,
    MoviePopularComponent,
    MovieDiscoverComponent,
    MenuDiscoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
