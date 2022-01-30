const express = require('express');
const app = express();
// create home route
app.get("/", function(req, res){
  res.send("<h1>Hello</h1>");
});
// create a contact route
app.get("/contact",function(req,res){
  res.send("Contact me at bhaskarkumar.india@gmail.com")
});
// create aboute route
app.get("/about",function(req,res){
  res.send("Hii, I am Bhaskar Kumar.  I am currently learning ExpressJs. I hope i will master this skill soon.")
})
// Create a hobbie route
app.get("/hobbie",function(req,res){
  res.send("<ul><li>coffee</li><li>code</li></ul>")
})
app.listen(3000,function(){
  console.log("Server Started at port 3000");
});
