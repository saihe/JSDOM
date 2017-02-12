var http = require("http");
var querystring = require("querystring");
console.log("起動");
http.createServer(function(req, res){
	console.log("リクエスト受信");
	var body;
	req.on("data",function(data){
		body = JSON.parse(data);
	});
	req.on("end", function(){
	console.log(body);
	var jsonp = "test({\"response\": \"" + body + "\"});";
	var json = "{\"response\": \"" + body + "\"}";
	res.writeHead(
		200,
		{"Content-Type": "application/javascript"},
		//{"Content-Type": "application/json"},
		{"Access-Control-Allow-Origin": "*"}
	);
	res.statusCode = 200;
	res.write(jsonp);
	res.end();
	console.log("リクエスト送信");
	console.log("終了");
	});
	this.close();
}).listen(8888, "127.0.0.1");
