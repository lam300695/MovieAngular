import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  title: string;
  description: string;
  book: Book = null;
  check = false;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
        this.books = data;
        console.log(this.books);
      },
      error => {
        console.log(error);
      });
  }

  onAdd() {
    let book = new Book(this.title,this.description);
    this.bookService.addBooks(book).subscribe(data => {
        this.books.push(data);
        alert('Them thanh cong');
      },
      error => {
        console.log(error);
      });
  }

  edit(item: Book) {
    this.book = item;
  }

  view(item: Book) {
    this.book = item;
    this.check = !this.check;
  }

  onUpdate() {
    this.bookService.updateBooks(this.book).subscribe(data => {
        console.log(data);
        alert('Update thanh cong');
      },
      error => {
        console.log(error);
      });
  }

  delete(id : number){
    this.bookService.deleteBooks(id).subscribe(data => {
        let index = this.getIndex(data.id);
        this.books.splice(index,1);
        alert('Da xoa ' + index);
      },
      error => {
        console.log(error);
      });
  }

  getIndex(id: number) : number{
    let result = 0;
    this.books.forEach((item,index ) =>{
      if (item.id == id){
        result = index;
      }
    });
    return result;
  }

}
