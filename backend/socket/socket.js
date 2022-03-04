const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

module.exports = server =>{ // exporta modulo recebendo um server como parametro
    const { Server } = require("socket.io"); // cria um socet io
    const io = new Server(server);
    const client = new Client(); // cliente do wwjs

    io.on('connection', (socket) => {  console.log('a user connected');});

    
    client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED');
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
     
        msg.reply('pong');
  
});

client.initialize();
}