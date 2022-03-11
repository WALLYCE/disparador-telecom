const pg = require('pg');

const config ={
    host: '',
    user:  '',
    password: '',
    database: '',
    port:     ''
}
const conexao = new pg.Client(config);

module.exports = conexao
