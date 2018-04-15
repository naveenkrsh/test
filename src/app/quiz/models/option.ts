export class OptionKeyValue {
    constructor(private key: number, private value: string) { }
    get Key(): number { return this.key; }
    get Value(): string { return this.value };
}
