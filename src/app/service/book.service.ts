import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/Book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookURL = 'http://localhost:3000/books';
  private books: Book[] = [];

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get<Book[]>(this.bookURL);
  }
  addBooks(book :Book) :Observable<Book>{
    return this.http.post<Book>(this.bookURL,book);
  }

  updateBooks(book : Book) :Observable<Book>{
    return this.http.put<Book>(`${this.bookURL}/${book.id}`,book);
  }

  deleteBooks(id : number) : Observable<Book>{
    return this.http.delete<Book>(`${this.bookURL}/${id}`);
  }
}

