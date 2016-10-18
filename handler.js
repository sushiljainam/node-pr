var querystring = require('querystring');
fs = require('fs');

var htmlfile = {};

function home(htmlPath,response,rUsers) {
  console.log("Executing home handler");
  htmlfile.Home = fs.readFileSync(htmlPath+'home.html').toString();
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(htmlfile.Home);
  response.write(rUsers.toString());
  var scriptString = "<script type='text/javascript'> window.addEventListener('load', function(event) { console.log('All resources finished loading!'); ul = document.getElementById('users'); li = document.createElement('li'); li.appendChild(document.createTextNode('Four')); ul.appendChild(li); });</script>";
  response.write(scriptString);
  response.end();
}

function user(htmlPath,response,username) {
  console.log("Executing 'user' handler");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("working as user: " + username);
  response.end();
}
exports.home = home;
exports.user = user;
