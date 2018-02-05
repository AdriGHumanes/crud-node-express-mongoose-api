var express = require('express');
var bodyParser = require('body-parser');

//Express app
var app = express();


//Parse request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Database
var dbConfig = require('./config/db.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function(){
	console.log('Error. Exiting now');
	process.exit();
});

mongoose.connection.once('open', function(){
	console.log("Successfully connected");
});

//Simple route
app.get('/', function(req, res){
	res.json({"message":"This is the base URL of the API."});
});

//Routes
require('./app/routes/contact.routes.js')(app);

//Listening for request
app.listen(3000, function(){
	console.log("The server is listening on port 3000");
});