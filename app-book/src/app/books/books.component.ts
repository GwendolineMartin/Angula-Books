import { Component, OnInit } from '@angular/core';
import { Book } from '../data/book';
import { BOOKS } from '../data/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books :  Book[] = BOOKS;
  selectedBook: Book | null =null;



  constructor() { }

  ngOnInit(): void {
  }

  onClick(book : Book):void {
    this.selectedBook = {...book}
  }


}
