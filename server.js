// EXPRESS.JS VERSION

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages = [];

app.use(bodyParser());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/', function(req, res){
	res.send(JSON.stringify(messages));
});	// End app.get

app.post('/', function(req, res){
	req.body.createdAt = new Date();
	console.log(req.body);
	messages.push(req.body);
	res.send(JSON.stringify(messages));
})

app.listen(8080);
console.log("Listening in on port " + 8080);


// REGULAR NODE.JS VERSION

// var http = require('http');
// var messages = ["Suppp", "How you doing?", "I'm a punk!"];

// var onRequest = function(req, res){

// 	if (req.method === "GET") {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		})
// 	res.end(JSON.stringify({message: messages}));
// 	}
// 	else if (req.method === "POST") {
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*'
// 		})
// 		var postData = '';
// 		req.on('data', function(chunk) {
// 			postData += chunk.toString();
// 		});
// 		req.on('end', function() {
// 			console.log("Got POST data:");
// 			console.log(JSON.parse(postData));
// 			messages.push(JSON.parse(postData).message);
// 			console.log(messages);
// 			res.end(JSON.stringify({message: messages}));
// 		});
// 		else if (req.method === "OPTIONS") {	// For Chrome browser
// 		res.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 			'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 		});	// End res.writeHead
	
// 	}

// };	// End onRequest



// http.createServer(onRequest).listen(9200);
// console.log("Listening in on port " + 9200);

