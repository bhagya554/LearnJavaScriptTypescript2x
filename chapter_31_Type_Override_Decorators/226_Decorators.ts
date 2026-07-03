function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    console.log(original)
    descriptor.value = function (...args: any[]) {
        console.log(`Called ${methodName} with args:`, args);
        return original.apply(this, args);
    };
}
/*
console.log(original) → prints the function itself. - [Function: add]
From now on, whenever someone calls add(), run this new function instead."
"Take all arguments passed to this function and put them into an array called args." -...args: any[]
descriptor.value = function (...args: any[]) {
    console.log(`Called ${methodName} with args:`, args);
    return original.apply(this, args);
};

original(2,3) → calls the function.
original.apply(this,[2,3]) → calls the function using an array of arguments.
*/
class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }

}

const calc = new Calculator();
console.log(calc.add(2, 3));
