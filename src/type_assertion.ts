//Type Assertion

let variable;
variable = 'Look like string and now get the length of the string';

console.log((<string>variable).length);

//second method;
console.log((variable as string).length);