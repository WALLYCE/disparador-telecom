const express = require('express');
const http = require('http');
const { Server}  = require('socket.io')

const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);
module.exports = {
    servidor:serverHttp, 
    socket_io:io,
    express: app
};

