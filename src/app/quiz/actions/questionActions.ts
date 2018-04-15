import { Answer } from './../models/answer';
import { Action } from '@ngrx/store';

export const LOAD = '[Question] load'
export const NEXT_QUESTION = '[Question] next question';
export const PREV_QUESTION = '[Question] prev question';
export const SET_QUESTION = '[Question] set question';
export const SAVE_QUESTION = '[Question] save question';


export class LoadQuestionsAction implements Action {
    readonly type = LOAD;
}
export class NextQuestionAction implements Action {
    readonly type = NEXT_QUESTION;
}

export class PrevQuestionAction implements Action {
    readonly type = PREV_QUESTION;
}
export class SetQuestionAction implements Action {
    readonly type = SET_QUESTION;
    constructor(public payload : number)
    {

    }
}

export class SaveQuestionAction implements Action {
    readonly type = SAVE_QUESTION;
    constructor(public payload : Answer)
    {

    }
}

export type Actions = LoadQuestionsAction
|NextQuestionAction
|PrevQuestionAction
|SetQuestionAction
|SaveQuestionAction;