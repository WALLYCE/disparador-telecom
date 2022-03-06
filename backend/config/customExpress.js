const express = require('express');
const http = require('http');
const { Server}  = require('socket.io');
const cors = require('cors');
const app = express();
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, { cors: { origin: '*' } });
module.exports = {
    servidor:serverHttp, 
    socket_io:io,
    express: app
};

