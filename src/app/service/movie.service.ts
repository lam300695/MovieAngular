import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Movie} from '../model/Movie';
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieURL = 'https://5eb8fa86bb17460016b32c49.mockapi.io/home/lam/lam1';
  private movies: Movie[] = [];

  constructor(private http: HttpClient) {
  }

  getMovies() {
    return this.http.get<Movie[]>(this.movieURL);
  }

  addMovies(movie :Movie) :Observable<Movie>{
    return this.http.post<Movie>(this.movieURL,movie);
  }

  updateMovies(movie : Movie) :Observable<Movie>{
    return this.http.put<Movie>(`${this.movieURL}/${movie.id}`,movie);
  }

  deleteMovies(id : number) : Observable<Movie>{
   return this.http.delete<Movie>(`${this.movieURL}/${id}`);
  }
}
