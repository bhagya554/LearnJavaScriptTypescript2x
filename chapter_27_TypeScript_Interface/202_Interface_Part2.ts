interface APIResponse{
    body:string,
    header?:object,
    duration?:number
}

let apiTest1:APIResponse={
    body:"hello"
}

let apiTest2:APIResponse={
    body:"hello",
    header:{"Content-Type":"application/json"},
    duration:5000
}

console.log(apiTest2.duration)
console.log(apiTest1.body)