console.log("Current Directory:", __dirname);
console.log("Current File:", __filename);

console.log("Before Timeout");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("Running every 3 seconds");
}, 3000);

setTimeout(() => {
    process.exit();
}, 10000);