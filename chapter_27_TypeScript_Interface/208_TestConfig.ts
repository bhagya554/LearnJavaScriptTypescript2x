interface TestConfig{
    browser:string;
    baseURL:string;
    headless:boolean;
    timeout?:number;
    retries?:number
}

let ciConfig:TestConfig={
    browser:"chrome",
    headless:true,
    baseURL:"https://staging.app.com"
}

let localConfig:TestConfig={
    browser:"firefox",
    headless:false,
    baseURL:"http://localhost:3000",
    timeout: 10000,
    retries: 3
}

console.log("CI baseURL:",ciConfig.baseURL,"|browser",ciConfig.browser);
console.log("local baseURL:",localConfig.baseURL,"|browser",localConfig.browser);