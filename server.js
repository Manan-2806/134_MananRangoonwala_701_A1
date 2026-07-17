var http = require("http");

http.createServer(function(req,res){

    res.write("Welcome To NodeJS.")
    res.end();
}).listen(3000);

console.log("Server is running on port 3000");