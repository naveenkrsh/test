import { Book } from './../models/book';



export interface State {
    books: Array<Book>;
}

const initialState: State = {
    books: [
        new Book('Welcome 1', 20.50, 'Hello')
        , new Book('Welcome 2', 120.50, 'Hello')
        , new Book('Welcome 3', 220.50, 'Hello')
    ],
};

export function reducer()
{
    
}

export const getBooks = (state: State) => state.books;