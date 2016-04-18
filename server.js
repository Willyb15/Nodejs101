 var http = require('http');
 var fs = require('fs'); //include the file system module
 var homePageHtml = fs.readFileSync('homePageHtml.html');

 function renderHomePage(request, response){
 	response.writeHead(200,{'content-type': 'text/html'});
 	response.write(homePageHtml);
 	response.end();
 }

 //function renderBadRequest(request, response){
 	//	response.writeHead(400,{'content-type': 'text/html'});
 	//	response.write('Sorry, that page doesn\'t exist');
 	//	response.end();
 //}

 function render404Page(request, response){
 	response.writeHead(404);
 	//console.log(request.statuscode);
 	response.end('404 Page Not Found! Sorry Bro');

 }

 
 var server = http.createServer(function(request, response){
	console.log(request.url);
	response.writeHead(200, {'content-type' : "text/plain"});
	if (request.url == '/'){
		renderHomePage(request, response);
	}else{
		render404Page(request, response);
	}

	
	//response.write('helloworld');
	console.log("This is a line to show that someone came to the server");
	//console.log(request);
	//console.log(response);
	response.end();
 	//resonse.writeHead(200);

 })

 server.listen(8000);
 console.log("Our Server is listening on Port 8000.");
