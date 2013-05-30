// reference the http module so we can create a webserver
var express = require("express")
    , app   = express()
    , http  = require("http")
    , server = http.createServer(app)
    , io     = require("socket.io").listen(server);

// create a server
http.createServer(function(req, res) {
    // on every request, we'll output 'Hello world'
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);

// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console