import { Book } from './../../models/book';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-item-view',
  templateUrl: './book-item-view.component.html',
  styleUrls: ['./book-item-view.component.css']
})
export class BookItemViewComponent implements OnInit {
   
  //book:  Book ; 
  constructor() { 
   //this.book = new Book('test',20.00,'testtt');
  }
  
  @Input() book:  Book;
  
  ngOnInit() {
  }

  getDescription () : string
  {
    return 'no description';
  }
}
