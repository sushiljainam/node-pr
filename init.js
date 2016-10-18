function getUsers() {

  var rUsers = [];
  rUsers.push('myntra');
  rUsers.push('flipkart');
  rUsers.push('amazon');
  rUsers.push('snapdeal');
  console.log("users are - "+rUsers);
  return rUsers;
}

exports.users = getUsers;
