function wrapResponse<T>(statusCode:number,data:T){
    return {responseCode:statusCode,responseData:data}
}

let userResp=wrapResponse<string>(200,"admin")
console.log(userResp)

let flagResp=wrapResponse<boolean>(200,true)
console.log(flagResp)

let countResp=wrapResponse<number>(200,12)
console.log(countResp)