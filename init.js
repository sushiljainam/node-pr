function getUsers() {

  var rUsers = [];
  rUsers.push('myntra');
  rUsers.push('flipkart');
  rUsers.push('amazon');
  rUsers.push('snapdeal');
  rUsers.push('bingo');
  console.log("users are - "+rUsers);
  // console.log(rUsers.indexOf("biango")>-1);
  return rUsers;
}

exports.users = getUsers;
