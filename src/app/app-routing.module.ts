import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';

const route: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
