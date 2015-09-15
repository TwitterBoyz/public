
var express        =         require("express");
var bodyParser     =         require("body-parser");
var cookieParser   =         require("cookie-parser");
var app            =         express();
var cookieParser = require('cookie-parser');
var _ = require('lodash');
// var posts = require()
var fs = require("fs");
// myJson = require("./filename.json");
var $ = require('jquery');
// var tweets = [];

app.locals.users = [];
// app.locals.users = [];
// app.locals.passwords = [];
app.locals.tweets = [];
// var users = [];
// var passwords = [];


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/css", express.static(__dirname + '/css'));


app.get('/',function(req,res){
  res.sendfile("html/index.html");
});

app.get('/user',function(req,res){
  res.sendfile("html/user.html");
});

app.get('/tweet',function(req,res){
  res.sendfile("html/tweet.html");
});

app.get('/main', function(req,res){
  res.sendfile("html/main.html");
});

// app.get('/main',function(req,res){
//   var user_name=req.body.user;
//   var password=req.body.password;
//    var input = {"username": user_name, "password": password};
//    var checkPassword = function() {
//     // app.locals.users.forEach(function (object){
//     //  if (object.password === input.password) {
//        console.log("Successful Login!");
//        res.sendfile("html/main.html");
//
//
//  };
//    app.locals.users.forEach( function (object) { if (object.username === input.username) {
//      checkPassword();
//     console.log(object.username);
//    }});
//
//
//      {
//       console.log("Wrong Username/Password Combination");
//       res.redirect('/');
// }
//
// });

app.post('/main', function(req,res, next){
  var user_name = req.body.username;
  var password = req.body.password;
  var object = {"username":user_name};
  console.log(password);
  console.log(user_name);
for (var i = 0; i < app.locals.users.length; i ++) {
if (app.locals.users[i].username == user_name) {
// if ((_.result(_.find(app.locals.users, 'username', user_name), 'password')) === password) {
if (app.locals.users[i].password == password) {
    console.log("Successful Login!");
        res.sendfile("html/main.html");
  }
}
  else {

   console.log("Wrong Username/Password Combination");
    res.sendfile('html/index.html');
}
}
});


app.get('/signup', function(req,res) {
  res.sendfile("html/signup.html");
});



app.post('/signup', function(req,res){
  var user_name = req.body.username;
  var password = req.body.password;
    if (_.some(app.locals.users, "username", user_name)){
        console.log("User already exists");
          res.redirect("/signup");
    }
      else {
      app.locals.users.push({"username": user_name, "password":password});
      // app.locals.passwords.push(password);
      console.log(app.locals.users);
      res.redirect("/");
    }
  console.log(app.locals.users);
=======
app.get('/signup',function(req,res){
  res.sendfile("html/signup.html");
});

app.get('/test',function(req,res){
  res.sendfile("public/test.js");
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  users.push(user_name);
  passwords.push(password);
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
  console.log(users, passwords);
>>>>>>> 66fd7ab96e29a851e6c614cf1f15933644613c3e
});

// app.post('/signup', function(req,res){
//   var user_name = req.body.username;
//   var password = req.body.password;
//     if (_.some(app.locals.users, "username", user_name)){
//         console.log("User already exists");
//           res.redirect("/signup");
//     }
//       else {
//       app.locals.users.push({"username": user_name, "password": password});
//       // app.locals.passwords.push(password);
//       console.log(app.locals.users);
//       res.redirect("/");
//     }
//   console.log(app.locals.users);
// });

app.listen(3000,function(){
  console.log("The frontened server is running on PORT 3000");
});
