interface ReturnString {
    (msg:string):string
    x: string
    new(): string
}

declare const foo: ReturnString;

const bar = foo('hey');
