
function logResponseBody(jsonBody){
    console.log(jsonBody);
}
function callbackFn(result){
    result.json().then(logResponseBody)
}
 
var sendObj = {
    method: "GET"
};

fetch("http://localhost:3000/handlesum?counter=1000", sendObj).then(callbackFn)