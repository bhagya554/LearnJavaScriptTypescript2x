interface TestHook{
    (testName:string):void
}

let beforeEachHook:TestHook=(testName:string):void => {
    console.log("[Before] Setting up: " + testName)
}

let afterEachHook:TestHook=function (testName:string):void{
    console.log("[After] Tearing Down: " + testName)
}

interface TestCase{
    id:number;
    name:string;
    status:string;
    duration:number;
}

let test1:TestCase={
    id:1,
    name:"Login with valid credentials",
    status:"PASS",
    duration:1500

}
//TC 1: "Login with valid credentials" -> PASS
beforeEachHook("Login Test")
console.log("TC-"+test1.id+": " + test1.name+"->"+test1.status)
afterEachHook("Login Test")