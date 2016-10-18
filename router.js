
function route(handle,htmlPath,pathname,response,reviewData){
  var init = require('./init');
  rUsers = init.users();
	console.log("Routing a reqest forrr " + pathname);
  username = getUserParsePath(pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](htmlPath,response,rUsers);
	}
  else if (username) {
    handle['user'](htmlPath,response,username);
  }
  else{
		console.log("No handler for " + pathname);
		response.writeHead(404,{"Content-Type": "text/plain"});
		response.write("Error 404 page not found");
		response.end();
	}
}
function getUserParsePath(pathname) {
  username = pathname.split("/user/")[1];
  console.log("username is :"+ username);
  return username;
}
exports.route = route;
