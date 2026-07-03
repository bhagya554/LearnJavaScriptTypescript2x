interface APIResponse{
    readonly statusCode:number;
    body:string;
    header?:object;
    responseTime?:number
}

let response1:APIResponse={
    statusCode:200,
    body:"{'user':'admin'}"
}
// readOnly
// Readonly - can't modify the readonly

// ? - optional

//Cannot assign to 'statusCode' because it is a read-only property
//response1.statusCode=500;

console.log("Status:",response1.statusCode)
console.log("Body:",response1.body)
console.log("Header:",response1.header)

response1.body="{'id':123}"
console.log("Body:",response1.body)