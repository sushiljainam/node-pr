var querystring = require('querystring');
fs = require('fs');

var htmlfile = {};

function home(htmlPath,response) {
  console.log("Executing home handler");
  htmlfile.Home = fs.readFileSync(htmlPath+'home.html').toString();
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(htmlfile.Home);
  response.end();
}

function user(htmlPath,response) {
  console.log("Executing 'user' handler");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("working as user ");
  response.end();
}
exports.home = home;
exports.user = user;
