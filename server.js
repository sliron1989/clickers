const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const app = express();

let server = http.createServer(app);
let io = socketIO(server);
app.get('/', (req, res) =>
    res.send('Hello World!'));

server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`));