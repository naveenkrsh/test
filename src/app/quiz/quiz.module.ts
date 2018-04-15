import { QuestionComponent } from './containers/question/question.component';
import { ComponentsModule } from './components/index';
import { PaginationComponent } from './containers/pagination/pagination.component';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('questions', reducers)
  ],
  declarations: [QuizComponent,PaginationComponent,QuestionComponent],
  exports: [QuizComponent]
})
export class QuizModule { }