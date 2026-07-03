interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "Pass",
    duration: 3000
}

console.log("TC-" + test1.id + ":" + test1.name + "-> status: " + test1.status + " and duration: " + test1.duration)

let test2: TestCase = {
    id: 2,
    name: "Login with invalid credentials",
    status: "Fail",
    duration: 4000
}


console.log("TC-" + test2.id + ":" + test2.name + "-> status: " + test2.status + " and duration: " + test2.duration)

// let test3: TestCase = {
//     id: 1,
//     name: "Login with valid credentials",
//     status: "PASS",
// };