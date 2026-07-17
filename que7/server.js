const fetch = require('node-fetch');

async function fetchGooglePage() {
    try {
        const response = await fetch('https://www.google.com');

        console.log("Status Code:", response.status);

        const data = await response.text();

        console.log(data.substring(0, 500));
    } catch (err) {
        console.log("Error:", err.message);
    }
}

fetchGooglePage();