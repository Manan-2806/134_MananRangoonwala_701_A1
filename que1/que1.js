const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=>{

    if(req.url === "/"){

        fs.readFile("index.html",(err,data)=>{

             if(err){

                res.end("Error")
            }
            else{   
                
                res.end(data)
            }
        })
    }
    else if(req.url === "/getHello" && req.method === "GET"){

            res.end("Hello NodeJS")
        }
    else{

            res.end("404 Page Not Found!");
        }
})

server.listen(3000,()=>{

    console.log("Server is running on port 3000.")
})