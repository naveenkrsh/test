import { Answer } from './../../models/answer';

import { Question } from './../../models/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question-item-view',
  templateUrl: './question-item-view.component.html',
  styleUrls: ['./question-item-view.component.css']
})
export class QuestionItemViewComponent implements OnInit {


  @Input() question: Question;
  @Output() onSave = new EventEmitter<Answer>();
  @Output() onNext = new EventEmitter<boolean>();
  @Output() onPrev = new EventEmitter<boolean>();

  answer: number;

  constructor() {
    this.answer = 0;
  }

  ngOnInit() {

  }

  isAnswered(): boolean {
    return this.answer > 0;
  }

  setChecked(option: number): boolean {
    return this.question.answer == option;
  }
  setAnswer(ans: number) {
    this.answer = ans;
  }
  save() {
    this.onSave.emit(new Answer(this.answer, this.question.id));
  }
  next() {
    this.onNext.emit();
  }
  prev() {
    this.onPrev.emit();
  }
}

