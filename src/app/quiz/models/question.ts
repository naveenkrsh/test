import { OptionKeyValue } from './option';
export class Question {
    id: number;
    value: string;
    options: Array<OptionKeyValue>;
    answer: number;
    isActive: boolean;
    constructor() {
        this.options = new Array<OptionKeyValue>();
        this.answer = 0;
        this.isActive = false;
    }
}
