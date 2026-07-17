const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("question4.zip")

const archive = archiver("zip",{
    zlib: {level:9}
})

output.on("close",()=>{

    console.log("ZIP File Created Successfully.")

})

archive.on("error",(err)=>{

    throw err;
})

archive.pipe(output)

archive.directory("question4",false)

archive.finalize()