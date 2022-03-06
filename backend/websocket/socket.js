const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const {socket_io} = require('../config/customExpress');

socket_io.on('connection', (socket) => {  console.log('a user connected');});

    const client = new Client(); // cliente do wwjs

    
    client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED');
    qrcode.generate(qr, {small: true});
    socket_io.emit('qrcode', qr);
   });

   
    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('message', msg => {
        
            msg.reply('pong');
    
    });

   client.initialize();
