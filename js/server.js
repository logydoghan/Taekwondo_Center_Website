var express = require("express");
var app     = express();
var path    = require("path");
var fs      = require("fs");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/../HTML/homepage.html'));
  if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

     fs.readFile(__dirname + '/../css/style.css', function (err, data) {
       if (err) console.log(err);
       res.writeHead(200, {'Content-Type': 'text/css'});
       res.write(data);
       res.end();
     });

}});

app.listen(3000);



console.log("Running at Port 3000");
