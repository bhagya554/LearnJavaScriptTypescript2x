abstract class BaseTest{
    protected testName:string;

    constructor(testName:string){
        this.testName=testName;
    }

    abstract setup():void;
    abstract execute():void;
    abstract tearDown():void;
}

class UITest extends BaseTest{
    // constructor(testName:string){
        // super("Login Test")
    // }
    setup():void{
        console.log("Setup : launch browser");
    }

    execute():void{
        console.log("Execute : click button, fill forms: "+this.testName);
    }

    tearDown(): void {
        console.log("Teardown : close browser")
    }

    loan():void{
        console.log("parent has a loan")
    }
}

//let ui=new UITest(); //Error - Expected 1 arguments, but got 0
//If the base class constructor requires parameters, then 
    // > either the caller must supply them, 
    // (or) 
    // > the derived class must supply them through super(...). 
//Otherwise TypeScript will report an error.
let ui=new UITest("Login Test")
ui.setup();
ui.execute();
ui.tearDown();
ui.loan()
