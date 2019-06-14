import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies/popular', pathMatch: 'full'},
  { path: 'movies/:category', component: MoviesComponent},
  { path: 'movies/discover/:id', component: MoviesComponent},
  { path: 'movies/:search/:input', component: MoviesComponent},
  { path: 'movie/detail/:id', component: MovieDetailsComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
