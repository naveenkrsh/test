import { Question } from './../../models/question';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromQuestions from './../../reducers';
import * as questionActions from './../../actions/questionActions';
import { OptionKeyValue } from '../../models/option';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  questions$: Observable<Question[]>;
  activeIndex$: Observable<number>;
  constructor(private store: Store<fromQuestions.State>) {
    this.questions$ = store.select(fromQuestions.getAllQuestions)
    this.activeIndex$ = store.select(fromQuestions.getActiveQuestionIndex);
    //.subscribe(data=> console.log(data));
    //this.questions = this.getIntialValue();
  }

  ngOnInit() {
    //this.store.dispatch(new questionActions.Load());
  }

  changeQuestion(index) {
    console.log(index);
    this.store.dispatch(new questionActions.SetQuestionAction(index));
  }
}

