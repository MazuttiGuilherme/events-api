const eventStatus = [ "ativo", "inativo"];
const EventListUseCase = require('../core/events/event-list.usecase');
const EventListMapper = require('../mapper/events/event-list.mapper');


const EventList = (req, res) => { 
    
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
    
    //todo: transformando dados da entra em objetos de negocio
    

    //todo: camada de negocio
    const ucResult = EventListUseCase({ status: query})

    //todo: montar objeto de saida 
    res.json(EventListMapper.domainToDTO(ucResult)); 
  
}


module.exports = {

    EventList,

}
