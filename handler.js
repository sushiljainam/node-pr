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

function user(htmlPath,response,username,rUsers) {
  console.log("Executing 'user' handler");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("working as user: " + username);
  if(isRegistered(username,rUsers)){
    response.write("<p>already registered</p>");
  }else{
    response.write("<p><strong>new user</strong></p>");
  };
  response.write("<p>message to : "+showDDexcept(username, rUsers)+"</p>");
  response.write("<textarea></textarea>")
  response.end();
}
exports.user = user;

function prepareScriptUsers(users){
  var res = "";
  res += "<script type='text/javascript'> window.addEventListener('load', function(event) { console.log('All resources finished loading!'); ul = document.getElementById('users');";
  for (var i = 0; i < users.length; i++) {
    res += " li = document.createElement('li'); a = document.createElement('a');  a.appendChild(document.createTextNode('"+users[i]+"')); a.setAttribute('href','./user/"+users[i]+"'); li.appendChild(a); ul.appendChild(li);";

  }
  res += " });</script>";
  return res;
}

function isRegistered(u,uArray){
  return uArray.indexOf(u) > -1;
}

function showDDexcept(u,us) {
  var res = "";
  res += "<select class='' name=''>";
  for (var i = 0; i < us.length; i++) {
    if(u!==us[i]){
      res += "<option value='"+i+"'>"+us[i]+"</option>";
    }
  }
  res += "</select>";
  return res;
}
