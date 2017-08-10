var http = require("http");	//node.js 內建http模組
var url = require("url"); 	//node.js 內建url模組
var WebSocketServer = require('websocket').server;

//Connected WebSocket clients
var clients = [];

function start(route, handlers) {
  function onRequest(request, response) { //請求事件觸發後帶入兩個參數 請求,響應
  
	var pathname = url.parse(request.url).pathname;
	var query = url.parse(request.url).query;
	//停止請求圖標後的response
	if(request.url === "/favicon.ico"){
		return;
	}
	
    console.log("Request for " + pathname + " received.");
	console.log("Request url : " + request.url);
	console.log("query string : "+ query);
	
 
	route(pathname, handlers, response, query);
	
	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

 var server =  http.createServer(onRequest).listen(8080); //建立http連線
  console.log("Server has started and is listening on port 8080.");


 wsServer = new WebSocketServer({
	 httpServer: server,
	 autoAcceptConnections: false
 });
 
 function onWsConnMessage(message){
	 if(message.type == 'utf8'){
		console.log('Received message: ' + message.utf8Data);
	 }else if(message.type == 'binary'){
		 console.log('Received binary data.');
	 }
 }
 
 function onWsConnClose(){
	 console.log(' Peer disconnected with reason: ' + resonCode);
 }
 
 function onWsRequest(request){
	 var connection = request.accept('echo-protocol', request.origin);
	 console.log("WebSocket connection accepted.");
	 
	 
	 // Save clients (unlimited clients)
	 clients.push(connection);
	 
	 connection.on('message', onWsConnMessage);
	 connection.on('close', onWsConnClose);
 }

 wsServer.on('reuqest', onWsRequest);
};


exports.start = start; //exports 匯出涵式給外部引用