import { CommonModule } from '@angular/common';
import { QuestionItemViewComponent } from './question-item-view/question-item-view.component';
import { PaginationViewComponent } from './pagination-view/pagination-view.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

export const COMPONENTS = [
    PaginationViewComponent,
    QuestionItemViewComponent
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
  })
  export class ComponentsModule {}