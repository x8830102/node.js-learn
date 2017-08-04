var http = require("http");	//node.js 內建http模組
var url = require("url"); 	//node.js 內建url模組

function start(route) {
  function onRequest(request, response) {
	 
	
	var pathname = url.parse(request.url).pathname;
	
    console.log("Request for " + pathname + " received.");
	console.log("Request url : " + request.url);
	
 
	route(pathname);
	
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;