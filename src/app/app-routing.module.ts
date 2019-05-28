import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';
import { MovieDiscoverComponent } from './movie-discover/movie-discover.component';

const routes: Routes = [
  { path: '', redirectTo: '/popular', pathMatch: 'full'},
  { path: 'popular', component: MoviePopularComponent},
  { path: 'detail/movie/:id', component: MovieDetailsComponent},
  { path: 'discover/movie/:id', component: MovieDiscoverComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
