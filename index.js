const express = require('express')
const app = express()
const porta = process.env.PORTA || 3000


//REQUEST 
  
  // CONTEXTOS

    // HEADER

      // estao contidos os dados de configuracao da request e tambem os dados autenticacao e autorização 

    // BODY 

      // estarao contidos os dados para execução do meu comando 

    // PARAMS


    // QUERY
    //   


  //METHOD: 

    //GET 
    //    - comum utilizar para expor consultas nos servicos
    
    app.get('/', function (req, res) { 
      res.send('Hello World 1.1') 
    });

    app.get('/:id', function (req, res) { 
      res.send('Hello World 1.1') 
    });
    
    //POST 
    
    app.post('/', function (req, res) { 
      res.send('Hello World 1.2') 
    });
    
    
    //PUT 
    
    //DELETE 
    
    //PATH
    
  //RESPONSE
    

const listener = app.listen(porta, function () {
  console.log("Node.js listening on port " + listener.address().port);
});
