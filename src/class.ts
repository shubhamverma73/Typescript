export{}
class testing {
    public name = 'Shubham Verma from Class';

    public testFunc = () => {
        console.log(this.name);
    }
}
let testObj = new testing();
testObj.testFunc();