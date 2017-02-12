var jsdom = require("jsdom");
var testmod = require("testmod");

var window = jsdom.jsdom().defaultView;

global.$;
global.xml = process.argv[2];

jsdom.jQueryify(
	window,
	"./jquery-2.1.0.min.js",
	function(window, jquery){
		global.$ = jquery;
		testmod.mod1();
		console.log("start");
		//testmod.mod2();
		try{
			var body = "{\"xml\": \""+ xml + "\"}";
			//body = {"xml": xml};
			$.ajax({
				url: "http://127.0.0.1:8888",
				type: "POST",
				contentType: "application/json",
				data: body,
				crossDomain: true,
				cache: false,
				async: false,
				dataType: "jsonp",
				jsonpCallback: "test"
			})
			.done(function(response){
				console.log("result    : success");
				console.log("response  : " + JSON.stringify(response));
			})
			.fail(function(response, textStatus, errorThrown){
				console.log("result    : error");
				console.log("status    : " + response.status);
				console.log("statusText: " + response.statusText);
				console.log("testStatus: " + textStatus);
			});
		}catch(e){
			console.log(e);
		}
	}
);

