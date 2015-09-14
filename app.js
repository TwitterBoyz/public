
var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var users = [];
// var html_dir = './html/';

// app.use(express.static(path.join(__dirname, 'html')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.get('/user',function(req,res){
  res.sendfile("user.html");
});

app.get('/tweet',function(req,res){
  res.sendfile("tweet.html");
});

app.get('/main',function(req,res){
  res.sendfile("main.html");
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  users.push(user_name);
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
  console.log(users);
});

app.listen(3000,function(){
  console.log("Started on PORT 3000");
});
