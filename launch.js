const { exec } = require('child_process');

// Navigate to the Ultraviolet folder and run it
exec('cd Ultraviolet && npm install && npm start', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error starting Ultraviolet: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Ultraviolet started successfully: ${stdout}`);
});
