
import { OptionKeyValue } from './../models/option';
import { Question } from './../models/question';
import * as question from './../actions/questionActions'

export interface State {
    questions: Array<Question>;
    activeQuestionIndex: number;
}


const initialState: State = {
    questions: getIntialValue(),
    activeQuestionIndex: 0
};

function getIntialValue(): Array<Question> {
    let questions: Array<Question> = [];

    //option 
    for (let i = 1; i <= 20; i++)
        questions.push(createQuestion(i, "Question " + i, ["op1", "op2", "op3", "op4"]));

    questions[0].isActive = true;
    return questions;
}

function createQuestion(id: number, value: string, options: Array<string>): Question {
    let ques: Question = new Question();
    ques.id = id;
    ques.value = value;
    for (let i: number = 1; i < 5; i++)
        ques.options.push(new OptionKeyValue(i, "option " + i));
    return ques;
}

export function reducer(state = initialState, action: question.Actions): State {
    switch (action.type) {
        case question.SET_QUESTION:
            return { ...state, activeQuestionIndex: action.payload };

        case question.NEXT_QUESTION:
            if (state.activeQuestionIndex < state.questions.length - 1)
                return { ...state, activeQuestionIndex: state.activeQuestionIndex + 1 };
            else
                return state;

        case question.PREV_QUESTION:
            if (state.activeQuestionIndex > 0)
                return { ...state, activeQuestionIndex: state.activeQuestionIndex - 1 };
            else
                return state;

        case question.SAVE_QUESTION:
            let index = findIndex(state.questions, 'id', action.payload.QuestionId);
            //let currentState = Object.assign({}, state);

            let current = Object.assign({}, state.questions[index], { answer: action.payload.Answer });
            //currentState.questions[index] = current;
            let newState ={...state ,questions : [...state.questions.slice(0,index),current,...state.questions.slice(index+1)]};
            //console.log(newState);
            return newState;

        default:
            return state;
    }
}

function findIndex(arr, name, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][name] == value) {
            return i;
        }
    }
    return -1;
}


export const getQuestions = (state: State) => state.questions;
export const getActiveQuestionIndex = (state: State) => state.activeQuestionIndex;

