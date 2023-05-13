// Import
const http = require('http');
const {app} = require('./app');

// Environment variable
const PORT = 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
        console.log(`Server listening at ${PORT} ...`);
    })