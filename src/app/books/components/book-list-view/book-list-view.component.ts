import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {
  books: Array<Book>;
  constructor() {
    this.books = [
      new Book('Welcome 1', 20.50, 'Hello')
      , new Book('Welcome 2', 120.50, 'Hello')
      , new Book('Welcome 3', 220.50, 'Hello')
    ]
  }

  ngOnInit() {
  }

}
