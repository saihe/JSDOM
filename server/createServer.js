var http = require("http");
console.log("起動");
http.createServer(function(req, res){
	console.log("リクエスト受信");
	var jsonp = "test({\"response\": \"test\"});";
	res.writeHead(
		200,
		{"Content-Type": "application/javascript"},
		{"Access-Control-Allow-Origin": "*"}
	);
	res.statusCode = 200;
	res.write(jsonp);
	res.end();
}).listen(8888, "127.0.0.1");
