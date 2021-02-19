import { Component, OnInit, Input } from '@angular/core';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';
import { map,take, switchMap } from 'rxjs/operators';
import { BooksComponent } from '../books/books.component';
import { Book } from '../data/book';
import { BOOKS } from '../data/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  book : Book[] = BOOKS;

  constructor() {
   }

  ngOnInit(): void {
    
    
  }
  

}
