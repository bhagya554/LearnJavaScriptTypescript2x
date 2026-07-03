function getString(name: string): string {
    return name;
}

console.log(getString("Amit"))
//console.log(getString(12));//we cannot call with different datatype

function getFirstResult<T>(results: T[]) {
    //The ! — non-null assertion operator
    //"trust me, not null/undefined"
    // !tells the compiler: "this value is NOT null or undefined — stop warning me." Compile - time only.Zero runtime effect(strips out in compiled JS).
    return results[0]!;
   
}

let firstCode = getFirstResult<number>([200, 400, 501])
/*
Conceptually, the function becomes:
function getFirstResult(results: number[]): number {
    return results[0];
  }
*/
let firstTest = getFirstResult<string>(["LoginTest", "SignUp"])
console.log(getFirstResult([]))
console.log(getFirstResult(["prem", "supriya", "kishore"]))
console.log(firstCode)
console.log(firstTest)
