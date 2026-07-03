//readonly - I will be initialized only once using constructor
class PlaywrightConfig{
    readonly baseURL:string;
    readonly timeout:number;
    readonly retries:number;

    constructor(baseURL:string,timeout:number,retries:number){
        this.baseURL=baseURL;
        this.timeout=timeout;
        this.retries=retries;
    }

    showConfig():void{
        console.log("URL: " +this.baseURL)
        console.log("Timeout: " +this.timeout + "ms")
        console.log("Retries: " +this.retries)
    }
}

let config=new PlaywrightConfig("https://staging.app.com",3000,2);
config.showConfig()




