let unknownValue:unknown;
unknownValue="hello"
unknownValue=23;
if(typeof unknownValue === "string"){
    console.log(unknownValue.length)
}

let message: string = "Hello";

let username: string;
let userId: number;

//Function Annotation
function greet(name:string):string{
    return `Hello ${name}`
}
console.log(greet("bhagya"))

//Arrow Function
const multiply=(a:number,b:number):number =>a*b
console.log(multiply(12,4))

//Object Notation
let user:{name:string,age:number}={name:"rohit",age:45};