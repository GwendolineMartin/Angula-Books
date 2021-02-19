import { Injectable } from '@angular/core';
import { Book } from './data/book';
import { BOOKS } from './data/books';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  getAlbums(books:Book[]) {
    return books.slice(0,3);

  }
}
