function home(htmlPath,response,rUsers) {
  console.log("Executing home handler");
  htmlfileHome = fs.readFileSync('./home.html').toString();
  response.writeHead(200,{"Content-Type":"text/html"});
  response.write(htmlfileHome);
  // response.write(rUsers.toString());

  var scriptString = prepareScriptUsers(rUsers);
  response.write(scriptString);
  response.end();
}
exports = home();
console.log(home);
console.log(exports);

function prepareScriptUsers(users){
  var res = "";
  res += "<script type='text/javascript'> window.addEventListener('load', function(event) { console.log('All resources finished loading!'); ul = document.getElementById('users');";
  for (var i = 0; i < users.length; i++) {
    res += " li = document.createElement('li'); a = document.createElement('a');  a.appendChild(document.createTextNode('"+users[i]+"')); a.setAttribute('href','./user/"+users[i]+"'); li.appendChild(a); setTimeout(ul.appendChild(li),1000);";

  }
  res += " });</script>";
  return res;
}
