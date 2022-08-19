const eventStatus = [ "ativo", "inativo"];
const eventListUseCase = require('../core/events/event-list.usecase');
const eventListMapper = require('../mapper/events/event-list.mapper');


const eventList = (req, res) => { 
    
    //todo: extrair dados
    console.log(req.query);
    const query = req.query.status;
    
    //todo: validar os dados     
    if (query) {
        
        if(!eventStatus.includes(req.query.status))            
        return res.status(400).json({
            mensagem: "",
        }) 
    }
    
    //todo: transformando dados da entrada em objetos de negocio FALTOU
    

    //todo: camada de negocio
    const ucResult = eventListUseCase({ status: query})

    //todo: montar objeto de saida 
    res.json(eventListMapper.domainToDTO(ucResult)); 
  
}


module.exports = {

    eventList,

}
