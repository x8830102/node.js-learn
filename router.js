/*
*解析pathname，並實作start or send 涵式
*/

function route(pathname, handlers, response, query){
	console.log("Route this request: " + pathname);
	
	if(typeof handlers[pathname] == "function"){
		handlers[pathname](response,query);
	} else {
		console.log("No request handle for this pathname: '" + pathname + "'");
	}
	
}
exports.route = route;