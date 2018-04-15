import { Action } from '@ngrx/store';

export const CHANGE_ACTIVE: string  ='[Active Question Change]';
export const NEXT_ACTIVE: string  ='[Active Question Next]'; 

export class ActiveQuestionChangeAction implements Action
{
    readonly type = CHANGE_ACTIVE;
}

export type Actions = ActiveQuestionChangeAction;