class BasePage{
    protected baseURL:string;

    constructor(url:string){
        this.baseURL=url
    }

    protected navigate(path:string){
        console.log("Navigating to "+this.baseURL+path)
    }
}

class LoginPage extends BasePage{
    constructor(){
        super("https://app.staging.com")
    }

    login(user:string):void{
        this.navigate("/login");
        console.log("Typing " +user+ " in #username field")
        console.log("Click on #login-button")
    }
}

let page=new LoginPage();
page.login("'admin'");