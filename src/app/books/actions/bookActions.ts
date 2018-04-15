import { Action } from '@ngrx/store';
import { Book } from '../models/Book';

export const ADD_NEW_BOOK: string = 'ADD_NEW_BOOK';

export class AddNewBookAction implements Action {
    readonly type = ADD_NEW_BOOK;
    constructor(public payload: Book) { }
}
