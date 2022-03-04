const {Client} = require('whatsapp-web.js');
const client = new Client();
client.initialize();
const qrcode = require('qrcode-terminal');
class Mensagens{

    
    conecta(){
        client.on('qr', (qr) => {
            // NOTE: This event will not be fired if a session is specified.
               qrcode.generate(qr, {small: true});

          return 'ok';
        });
    }

    conectado(){
        client.on('ready', () => {
            console.log('Client is ready!');
            return "ok";
        });
        return "not okay";
    }
}
  

module.exports = new Mensagens;