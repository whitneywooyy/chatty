var http = require('http');
var messages = ["Suppp", "How you doing?", "I'm a punk!"];

var onRequest = function(req, res){

	if (req.method === "GET") {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	res.end(JSON.stringify({message: messages}));
	}
	else if (req.method === "POST") {
		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			console.log("Got POST data:");
			console.log(JSON.parse(postData));
			messages.push(JSON.parse(postData).message);
			console.log(messages);
			res.end(JSON.stringify({message: messages}));
		});
	
	}

};	// End onRequest



http.createServer(onRequest).listen(9200);
console.log("Listening in on port " + 9200);

