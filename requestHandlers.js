var QueryString = require('querystring');

/**
*Global variables
*/
var history = [ ];

function start(response,query){
	console.log("Handler 'start' is started.");
	console.log("query string : " + query);
}

function send(response,query){
	console.log("Handler 'send' is started.");
	console.log("query string : " + query);
	
	var ParsedString = QueryString.parse(query);
	
	var obj = {
		message: ParsedString.m,
		UserName: ParsedString.u,
		TimesTamp: (new Date()).getTime()
	};
	
	history.push(obj);
	
	//DEBUG//
	for(var i =0; i< history.length; i++){
		console.log("[" + i + "]: " + history[i].message);
	}
}

exports.start = start;

exports.send = send;