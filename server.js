var express = require('express');
var bodyParser = require('body-parser');

//Express app
var app = express();

//Parse request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Simple route
app.get('/', function(req, res){
	res.json({"message":"Hello World!"});
});

//Listening for request
app.listen(3000, function(){
	console.log("The server is listening on port 3000");
});