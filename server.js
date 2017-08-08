var http = require("http");	//node.js 內建http模組
var url = require("url"); 	//node.js 內建url模組

function start(route, handlers) {
  function onRequest(request, response) { //請求事件觸發後帶入兩個參數 請求,響應
  
	var pathname = url.parse(request.url).pathname;
	
    console.log("Request for " + pathname + " received.");
	console.log("Request url : " + request.url);
	
 
	route(pathname, handlers, response);
	
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8080); //建立http連線
  console.log("Server has started.");
}

exports.start = start; //exports 匯出涵式給外部引用