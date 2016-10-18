var init = require('./init');

function route(handle,htmlPath,pathname,response,reviewData){
	console.log("Routing a reqest for " + pathname);
  getUserParsePath(pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](htmlPath,response,reviewData);
	}
  else{
		console.log("No handler for " + pathname);
		response.writeHead(404,{"Content-Type": "text/plain"});
		response.write("Error 404 page not found");
		response.end();
	}
}
function getUserParsePath(pathname) {
  ;
  console.log(pathname.split("/user/"));
}
exports.route = route;
