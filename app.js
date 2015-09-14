
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var users = [];
var passwords = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendfile("html/index.html");
});

app.get('/user',function(req,res){
  res.sendfile("html/user.html");
});

app.get('/tweet',function(req,res){
  res.sendfile("html/tweet.html");
});

app.get('/main',function(req,res){
  res.sendfile("html/main.html");
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  users.push(user_name);
  passwords.push(password);
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
  console.log(users, passwords);
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});
