var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', function(req, res){
  res.sendfile("index.html", {root: path.join(__dirname, '/dist')});
});

app.get('/health*', function(req, res){
  res.send("200 OK");
});

app.listen(8081, function() {
  console.log("find-job-react is running at localhost: 8081")
});
