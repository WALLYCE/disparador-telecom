const {servidor} = require('./config/customExpress')
const {socket_io} = require('./config/customExpress')
require('./websocket/socket');
servidor.listen(8080, ()=> console.log('servidor conectado na porta 8080'));
