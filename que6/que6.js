const fs = require("fs")
const util = require("util")

const unlink = util.promisify(fs.unlink)

unlink("demo.txt")
.then(()=>{

    console.log("File Deletd Succesfully.")
})
.catch((err)=>{

    console.log("Error : " + err)
})