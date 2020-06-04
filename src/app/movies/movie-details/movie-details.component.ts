import { Component, OnInit } from '@angular/core';
import {movies} from '../../models/movie.mock-data';
import {Movie} from '../../models/movie';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  sameMovies: Movie[] = [];
  showedSameMovies: Movie[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('4444:', params['id']);
      this.getMovie(params['id']);
    });
  }
  getMovie(id: number) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == id) {
        this.movie =  movies[i];
        break;
      }
    }
    console.log('111:', this.movie);
    this.getMoviesWithSameGenre(this.movie);
  }
  getMoviesWithSameGenre(movie: Movie) {
    for (let i = 0; i < movies.length; i++) {
      for (let j = 0; j < movies[i].genres.length; j++) {
        for (let k = 0; k < movie.genres.length; k++) {
          if (movies[i].genres[j] === movie.genres[k] && movies[i].id !== movie.id) {
            if (!this.sameMovies.includes(movies[i]))
              this.sameMovies.push(movies[i]);
            break;
          }
        }
      }
    }
    this.showedSameMovies = [];
    for (let i = 0; i < 4; i++) {
      let n = Math.floor(Math.random() * Math.floor(this.sameMovies.length));
      if (!this.showedSameMovies.includes(this.sameMovies[n])) {
        this.showedSameMovies.push(this.sameMovies[n]);
      }
      else {
        i--;
      }
    }
  }
}
