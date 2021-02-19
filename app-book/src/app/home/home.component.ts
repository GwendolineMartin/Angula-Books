import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../data/book';
import { BOOKS } from '../data/books';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books : Book[] = BOOKS;

  constructor(private aS : ServiceService) {
    this.books = this.aS.getAlbums(this.books)
    console.log(this.books)
   }

  ngOnInit(): void {
    
    
    
  }
  

}
