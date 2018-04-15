import { Answer } from './../../models/answer';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { Store } from '@ngrx/store';
import * as fromQuestions from './../../reducers';
import * as questionActions from './../../actions/questionActions';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question$: Observable<Question>;

  constructor(private store: Store<fromQuestions.State>) {
    this.question$ = store.select(fromQuestions.getActiveQuestion);
    this.question$.subscribe(data => console.log(data));
    //this.questions = this.getIntialValue();
  }

  ngOnInit() {
  }

  next() {
    this.store.dispatch(new questionActions.NextQuestionAction());
  }
  prev() {
    this.store.dispatch(new questionActions.PrevQuestionAction());
  }

  save(answer: Answer) {
    this.store.dispatch(new questionActions.SaveQuestionAction(answer));
  }
}
