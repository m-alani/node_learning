"use strict";

const http = require("http");
const fs = require("fs");

function notFoundResponse(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("404 : Couldn't find the file you are looking for");
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
console.log('Our server is running on port ' + process.env.PORT + ' ...');