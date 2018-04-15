
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromQuestions from './../reducers/questions';
import * as fromRoot from '../../reducers';
//import * as fromActiveQuestion from '../reducers/activeQuestion'; 
export interface QuestionsState {
    questions: fromQuestions.State;
    
}

export interface State extends fromRoot.State {
    'questions': QuestionsState;
}

export const reducers = {
    questions: fromQuestions.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
*/
export const getQuestionsState = createFeatureSelector<QuestionsState>('questions');

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getQuestionsEntitiesState = createSelector(
    getQuestionsState,
    state => state.questions
);

export const getAllQuestions = createSelector(
    getQuestionsEntitiesState,
    fromQuestions.getQuestions
);

export const getActiveQuestionIndex = createSelector(
    getQuestionsEntitiesState,
    fromQuestions.getActiveQuestionIndex
)

export const getActiveQuestion = createSelector(
    getAllQuestions,
    getActiveQuestionIndex,
    (questions,index) => questions[index]
);