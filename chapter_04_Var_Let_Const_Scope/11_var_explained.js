var a = 10//global scope
console.log(a)//10

//function scoped

function printHello() {
    console.log("Hello")
    var a = 20//local scope
    console.log("Inside function: ", a)

    if (true) {
        var a = 30 //redeclaration allowed in JS for var but shows duplicate local variable in Java
        console.log("Inside if block: ", a)//30
    }

    console.log("Outside If block: ", a)

}
printHello()
var a = 50
console.log("global again: ", a)

