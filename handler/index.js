var querystring = require('querystring');
fs = require('fs');
var home = require('./home');
var htmlfile = {};

console.log(require('./home'));
exports.home = home;
console.log(exports);

function user(htmlPath,response,username,rUsers) {
  console.log("Executing 'user' handler");
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write("working as user: " + username);
  if(isRegistered(username,rUsers)){
    response.write("<p>already registered</p>");
  }else{
    response.write("<p><strong>new user</strong></p>");
  };
  response.write("<form action='' method='post'>");
  response.write("<p>message to : "+showDDexcept(username, rUsers)+"</p>");
  response.write("<textarea name='msg'></textarea>");
  response.write(showSendBtn());
  response.write("</form>");
  response.end();
}
exports.user = user;
console.log(exports);

function isRegistered(u,uArray){
  return uArray.indexOf(u) > -1;
}

function showDDexcept(u,us) {
  var res = "";
  res += "<select class='' name='rcvr'>";
  for (var i = 0; i < us.length; i++) {
    if(u!==us[i]){
      res += "<option value='"+i+"'>"+us[i]+"</option>";
    }
  }
  res += "</select>";
  return res;
}

function showSendBtn() {
  var res = "";
  res += "<input type='submit' name='send' value='Send!' />";
  return res;
}
