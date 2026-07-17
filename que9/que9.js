const fs = require('fs');

// Create a file and write data
fs.writeFile('example.txt', 'Hello, this is a file system example.', (err) => {
    if (err) throw err;
    console.log('File created and data written.');

    // Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // Append data to the file
        fs.appendFile('example.txt', '\nNew data added.', (err) => {
            if (err) throw err;
            console.log('Data appended successfully.');

            // Rename the file
            fs.rename('example.txt', 'newExample.txt', (err) => {
                if (err) throw err;
                console.log('File renamed successfully.');

                // Delete the file
                fs.unlink('newExample.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});