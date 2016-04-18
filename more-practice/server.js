var http = require('http');
var fs = require('fs'); //include the file system module
var morePractice = fs.readFileSync('morePractice.html');
var morePractice2 = fs.readFileSync('morePractice2.html');

function renderHomePage(request, response) {
    response.writeHead(200, {
        'content-type': 'text/html'
    });
    response.write(morePractice);
    response.end();
}

function renderPage2(request, response) {
    response.writeHead(200, {
        'content-type': 'text/html'
    });
    response.write(morePractice2);
    response.end();

}

function render404Page(request, response) {
    response.writeHead(404);
    response.end("The page you requested could not be found!404");
}

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'content-type': "text/plain"
    });
    if (request.url == '/') {
        renderHomePage(request, response);
    } else if (request.url == '/2') {
        renderPage2(request, response);
    } else {
        render404Page(request, response);
    }


    response.end();
});

server.listen(8500);
console.log("Server listening on Port 8500");