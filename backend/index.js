const customExpress = require('./config/customExpress');
const server = customExpress();
server.listen(8080, ()=> console.log('servidor conectado na porta 8080'));
