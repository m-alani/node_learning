var http = require("http");
var fs = require("fs");

function notFoundResponse(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write('Error 404: file not found!');
    response.end();
}

function onRequest(request, response) {
    
    /*console.log('Responding to a user request: ' + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write('Here\'s your response!');
    response.end();*/
    
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(response);
    } else {
        notFoundResponse(response);
    }
}

http.createServer(onRequest).listen(8080);
console.log('Server is running on port 8080 ...');