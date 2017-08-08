var server = require("./server.js"); //匯入模組(涵式)
var router = require("./router.js");
var handlers = require("./requestHandlers");


/*使用 object 來對應 pathname 與 request handlers
**兩個函數,start and send
*/
var req = {
	"/": handlers.start,
	"/start": handlers.start,
	"/send": handlers.send
};
server.start(router.route,req);