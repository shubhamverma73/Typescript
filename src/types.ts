var test = () => {
    for(var i=0; i<5; i++) {
        console.log(i);
    }
    console.log(`Outside the block ${i}`);
}
test();


//Another example
let number:number;
number = 15;
console.log(number);

let string:string;
string = "Shubham";
console.log(string);

let boolean:boolean;
boolean = true;
console.log(boolean);

let any:any;
any = "anything can be";
console.log(any);

let arrStr: string[];
arrStr = ['Hi', 'How', 'are', 'you'];
console.log(arrStr);

let arrNum:number[];
arrNum = [5, 10, 15, 20];
console.log(arrNum);

let anyAgain:string | number = "50";
console.log(anyAgain);