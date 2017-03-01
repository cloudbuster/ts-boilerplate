export class Sum {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    setA(a: number) {
        this.a = a;
    }

    setB(b: number) {
        this.b = b;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }

    sum() {
        return this.a + this.b;
    }
}