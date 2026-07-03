let rawResponse:unknown={
    statusCode:200,
    body:{user:"admin",role:"tester"}
}

interface UserResponse{
    statusCode:number;
    body:{user:string,role:string}
}

let response=rawResponse as UserResponse
console.log("Status:",response.statusCode)
console.log("User:",response.body.user)
console.log("Role:",response.body.role)
