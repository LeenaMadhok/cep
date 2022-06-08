//require of the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash =require("lodash");

const app = express();

const logoutContent="Your are log-out of the system !!!"

//setting-up ejs as view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//setting-up css files
app.use(express.static("public"));

//response of root route
app.get("/",function(req,res){
    console.log("home page");
    res.render("home");
});

//response of "/about" route
app.get("/about",function(req,res){
    console.log("about page");
    res.render("about");
});

//response of "/contact" route
app.get("/contact",function(req,res){
    console.log("contact page");
    res.render("contact");
});

//response of "/exam" route
app.get("/exam",function(req,res){
    console.log("exam page");
    res.render("exam");
});

//response of "/result" route
app.get("/result",function(req,res){
    console.log("result page");
    res.render("result");
});

// response to "/query" route
app.get("/query",function(req,res){
    console.log("query page");
    res.render("query");
});

// response to "/reset-password" route
app.get("/reset-password",function(req,res){
    console.log("reset-password page");
    res.render("reset-password");
});

// response to "/profile" route
app.get("/profile",function(req,res){
    console.log("profile page");
    res.render("profile");
});

// response to "/exam /test" route
app.get("/exam/test",function(req,res){
    console.log("test page");
    res.render("test");
});

// response to "/exam/thank" route
app.get("/exam/thank",function(req,res){
  console.log("thank you page");
  res.render("thank");
});

// response to "/result/marks" route
app.get("/result/marks", function(req,res){
  console.log("marks of particular subject.");
  res.render("marks");
});

//response of "/logout" route
app.get("/logout",function(req,res){
    console.log("logout page");
    res.render("logout",{logoutText:logoutContent});
});

//port at localhost 3000.
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
