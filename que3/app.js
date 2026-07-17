const readline = require("readline");
const chatbot = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function chat() {
    rl.question("You: ", (question) => {
        if (question.toLowerCase() === "exit") {
            console.log("Bot: Goodbye!");
            rl.close();
            return;
        }

        console.log("Bot:", chatbot(question));
        chat(); // Ask again
    });
}

chat();