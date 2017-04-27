/*

 Name:   counter-panda
 Author: Avraham Kalvo
 Date:   25/4/2017

 The following program listens to HTTP requests and prints out the amount of POST requests it received on every GET requested serviced

 */

var http = require('http');
var config = require('./config.json');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
var PostsCounter = 0;

function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onPost("/PostRequest", function(req, res) {
    PostsCounter++   // Top the Posts counter by one whenever a Post request is received
    console.log("POST Request Received, Current Requests: " + PostsCounter);
    res.end('PostsCounter');
});

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('POST Requests Current Counter: ' + PostsCounter);
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("404 - Page Does not exists");
});

http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
