let url = require("url");
let querystring = require("querystring");
let path = "http://localhost:3000/users/897384738?id=15494584&name=zyh&name=90";
let query = querystring.parse(url.parse(path).query);

console.log(query);
