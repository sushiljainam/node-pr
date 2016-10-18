var http = require('http');
var url = require('url');


function startServer (route,handle,htmlPath) {
  function onRequest(request, response) {
    var reviewData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request received for " + pathname);

    request.setEncoding("utf8");

    request.addListener("data",function(chunk){
      reviewData += chunk;
    });

    request.addListener("end",function() {
      route(handle,htmlPath,pathname,response,reviewData);
    });
  }

	var port = 8878;
	http.createServer(onRequest).listen(port);

	console.log("server started at localhost:"+ port);
}

exports.start = startServer;
