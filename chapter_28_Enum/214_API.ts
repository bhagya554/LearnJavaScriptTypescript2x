enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

function sendRequest(method: HTTPMethod, endpoint: string) {
    console.log("Method: " + method + " | Endpoint: " + endpoint + "-> 200 OK")
}

sendRequest(HTTPMethod.GET, "/api/users/1")
sendRequest(HTTPMethod.POST, "/api/users")
sendRequest(HTTPMethod.PUT, "/api/users/1")
sendRequest(HTTPMethod.DELETE, "/api/users/1")
