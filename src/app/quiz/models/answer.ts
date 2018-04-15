
export class Answer {
    constructor(private answer: number, private questionId: number) {

    }
    get Answer() {
        return this.answer;
    }
    get QuestionId() {
        return this.questionId;
    }
}
