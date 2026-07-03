let responseCodes: number[] = [200, 201, 404, 500, 302, 403];

function getFailedCodes(statusCodes:number[]):number[]{
return statusCodes.filter(statusCode=>statusCode>=400)
}

console.log(responseCodes)
console.log(getFailedCodes(responseCodes))