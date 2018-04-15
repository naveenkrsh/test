import { Answer } from './../../models/answer';
import { Question } from './../../models/question';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination-view',
  templateUrl: './pagination-view.component.html',
  styleUrls: ['./pagination-view.component.css']

})
export class PaginationViewComponent implements OnInit {

  @Input() questions: Question[];
  @Input() activeIndex: number;
  @Output() onSelect = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  select(index: number) {
    this.onSelect.emit(index);
  }

  getBoxCssClass(index: number) {
    if (index == this.activeIndex)
      return ['active-question'];
    else if (this.questions[index].answer != 0)
      return ['answered-question'];
    else
      return [];
  }
}
