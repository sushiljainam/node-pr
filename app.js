var server = require('./server');
var router = require('./router');
var handler = require('./handler');



var htmlPath = "./";

var handle = {};
handle["/"] = handler.home;
handle["/login"] = handler.home;
handle["/user/"] = handler.home;
handle["user"] = handler.user;
// handle["/"] = handler.home;

server.start(router.route,handle,htmlPath);
