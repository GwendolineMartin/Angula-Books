import { Component } from '@angular/core';
import { Book } from './data/book';
import { BOOKS } from './data/books';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Book's";
  books :  Book[] = BOOKS;





  onClick(book : Book):void {
    console.log(book);
  }
}


