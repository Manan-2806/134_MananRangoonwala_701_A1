const AdmZip = require("adm-zip")

const zip = new AdmZip("que4.zip")

zip.extractAllTo("./demo",true)

console.log("File Extracted Successfully.")