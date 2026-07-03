interface BasePage{
    url:string;
    title:string
}

interface LoginPage extends BasePage{
    usernameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}

interface TrailPage extends BasePage{
    usernameSelector: string;
    submitButtonSelector: string;
}

let loginPage:LoginPage={
    url:"/login",
    title:"Login Page",
    usernameSelector:'#username',
    passwordSelector:'#pswd',
    loginButtonSelector:"#login"
}

let trialPage:TrailPage={
    url:"/trial",
    title:"Free Trial Page",
    usernameSelector:'#username',
    submitButtonSelector:"#submit"
}

console.log("URL:",loginPage.url)
console.log("Title:",loginPage.title)
console.log("usernameSelector:",loginPage.usernameSelector)

console.log("-------")

console.log("URL:",trialPage.url)
console.log("Title:",trialPage.title)
console.log("usernameSelector:",trialPage.usernameSelector)