function route(pathname, handlers, response){
	console.log("Route this request: " + pathname);
	
	if(typeof handlers[pathname] == "function"){
		handlers[pathname](response);
	} else {
		console.log("No request handle for this pathname: '" + pathname + "'");
	}
	
}
exports.route = route;