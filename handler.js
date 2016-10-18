var querystring = require('querystring');
fs = require('fs');

var htmlfile = {};

function home(htmlPath,response,rUsers) {
  console.log("Executing home handler");
  htmlfile.Home = fs.readFileSync(htmlPath+'home.html').toString();
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(htmlfile.Home);
  // response.write(rUsers.toString());

  var scriptString = prepareScriptUsers(rUsers);
  response.write(scriptString);
  response.end();
}
exports.home = home;

function user(htmlPath,response,username) {
  console.log("Executing 'user' handler");
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("working as user: " + username);
  response.end();
}
exports.user = user;

function prepareScriptUsers(users){
  var res = "";
  res += "<script type='text/javascript'> window.addEventListener('load', function(event) { console.log('All resources finished loading!'); ul = document.getElementById('users');";
  for (var i = 0; i < users.length; i++) {
    res += " li = document.createElement('li'); a = document.createElement('a');  a.appendChild(document.createTextNode('"+users[i]+"')); a.setAttr li.appendChild(a) ul.appendChild(li);";

  }
  res += " });</script>";
  return res;
}
