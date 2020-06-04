import { Component, OnInit } from '@angular/core';
import { movies } from '../models/movie.mock-data';
import {Movie} from '../models/movie';
import {genreType, GenreType} from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  name = '';
  numOfCols = 4;
  movieList: Movie[][] = [[]];
  private moviesVar = movies;
  genres = [
    'action', 'adventure', 'comedy', 'crime', 'biography', 'drama', 'history', 'sport', 'mystery', 'thriller', 'scifi'
  ];
  GenreSelect = '';
  constructor() {
  }

  ngOnInit(): void {
    console.log('------', this.genres, '------');
    this.applyFilter();
  }
  getMovies() {
    for (let j = 0; j < Math.ceil((this.moviesVar.length / this.numOfCols)); j++) {
      const movieCol: Movie[] = [];
      let N = this.numOfCols * j + this.numOfCols;
      let n = (this.numOfCols * j);
      if (N > this.moviesVar.length) {
        N = this.moviesVar.length;
      }
      for (let i = n; i < N; i++) {
        movieCol[i - n] = this.moviesVar[i];
        console.log('MC: ', movieCol);
      }
      this.movieList.push(movieCol);

      console.log('ML: ', this.movieList);
    }
  }
  applyFilter() {
    if (this.movieList != null) {
      this.movieList = [[]];
    }
     if (this.name.trim() != '') {
       this.moviesVar = movies.filter(res => {
         return res.name.toLowerCase().match(this.name.toLowerCase());
       });
     }
     else { this.moviesVar = movies; }
     if (this.GenreSelect != '') {
       const movieSelected = [];
       for (let i = 0; i < this.moviesVar.length; i++) {
         if (this.moviesVar[i].genres.includes(this.GenreSelect)) {
           movieSelected.push(this.moviesVar[i]);
         }
       }
       this.moviesVar = movieSelected;
     }
     this.getMovies();
  }

  getByGenres() {
    this.movieList = [[]];
    this.moviesVar = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].genres.includes(this.GenreSelect) && !this.moviesVar.includes(movies[i])) {
          this.moviesVar.push(movies[i]);
        }
    }
    console.log('ZZZZZZ:', this.moviesVar);
    this.getMovies();
  }
}
