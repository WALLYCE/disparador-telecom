
module.exports = app =>{

    app.get('/', function(req,res){
        res.send(Mensagens.conecta());
    });

    app.get('/conectado', function(req,res){
      res.send(Mensagens.conectado());
    });

    
}