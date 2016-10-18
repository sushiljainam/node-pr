
function route(handle,htmlPath,pathname,response,reviewData){
  var init = require('./init');
  rUsers = init.users();
	console.log("Routing a reqest for " + pathname);
  username = getUserParsePath(pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](htmlPath,response,rUsers);
	}
  else if (username) {
    handle['user'](htmlPath,response,username,rUsers);
  }
  else{
		console.log("No handler for " + pathname);
		response.writeHead(404,{"Content-Type": "text/html"});
		response.write("Error 404 page not found");
    response.write("<h4>go to <a href='http://localhost:"+8880+"'>home</a><h4>");
		response.end();
	}
}
function getUserParsePath(pathname) {
  username = pathname.split("/user/")[1];
  console.log("username is :"+ username);
  return username;
}
exports.route = route;
