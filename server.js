/*
    server.js
    created by unitarySleet
    on 25 August 2016
    this is the index file which will contain nodejs server
    initially it will be used to run the server for testing
*/
// import the http module and initialise the port
var http = require('http');
const port = 1337;

// this function will handle the request and response
function hReq(req,res){
    res.end('This is my Server' +req.url);
}

// creating the server
var server = http.createServer(hReq);

// starting the server on port 3000
server.listen(port, function() {
    console.log("Server Running at http://localhost:%s", port);
});