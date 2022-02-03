"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testing {
    constructor() {
        this.name = 'Shubham Verma from Class';
        this.testFunc = () => {
            console.log(this.name);
        };
    }
}
let testObj = new testing();
testObj.testFunc();
