const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const http = require('http');

module.exports = () =>{
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
consign() // colocando controllers dentro do app
    .include('models')
    .include('controllers')
    .into(app);
    const server = http.createServer(app);
consign()
    .include('socket')
    .into(server);
    return server;
}

