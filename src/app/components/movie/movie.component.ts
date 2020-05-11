import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../service/movie.service";
import {Observable, Subscription} from "rxjs";
import {Movie} from "../../model/Movie";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[] = [];
  name: string;
   movie: Movie = null;

  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
        this.movies = data;
        console.log(this.movies);
      },
      error => {
        console.log(error);
      });
  }

  onAdd() {
    let movie = new Movie(this.name);
    this.movieService.addMovies(movie).subscribe(data => {
        this.movies.push(data);
      },
      error => {
        console.log(error);
      });
  }

  edit(item: Movie) {
    this.movie = item;
  }

  onUpdate() {
    this.movieService.updateMovies(this.movie).subscribe(data => {
       console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  delete(id : number){
    this.movieService.deleteMovies(id).subscribe(data => {
      let index = this.getIndex(data.id);
      this.movies.splice(index,1);
      },
      error => {
        console.log(error);
      });
  }

  getIndex(id: number) : number{
    let result = 0;
    this.movies.forEach((item,index ) =>{
      if (item.id == id){
        result = index;
      }
    });
    return result;
  }
}
