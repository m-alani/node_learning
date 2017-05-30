"use strict";

const http = require("http");
const fs = require("fs");

function notFoundResponse(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write('Error 404: file not found!');
    response.end();
}

function onRequest(request, response) {
    
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(response);
    } else {
        notFoundResponse(response);
    }
}

http.createServer(onRequest).listen(process.env.PORT);
console.log('Server is running on port ' + process.env.PORT + ' ...');