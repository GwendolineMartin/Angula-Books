import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../data/book';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit {
@Input() book : Book | null = null;
  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

}
