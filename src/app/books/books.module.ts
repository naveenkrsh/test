import { BookItemViewComponent } from './components/book-item-view/book-item-view.component';
import { BookListViewComponent } from './components/book-list-view/book-list-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent,BookItemViewComponent,BookListViewComponent],
  exports:[BooksComponent]
})
export class BooksModule { }