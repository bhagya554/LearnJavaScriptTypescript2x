interface ApiResponse<T> {
    responseCode: number;
    responseData: T;
}

function wrapResponse<T>(statusCode:number,data:T):ApiResponse<T>{
    return {
    responseCode:statusCode,
    responseData:data
    }
}


let userResp = wrapResponse(200, "admin");
// ApiResponse<string>
console.log(userResp)

let flagResp = wrapResponse(200, true);
// ApiResponse<boolean>
console.log(flagResp)

let countResp = wrapResponse(200, 12);
// ApiResponse<number>
console.log(countResp)
