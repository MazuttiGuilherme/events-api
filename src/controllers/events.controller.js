const eventStatus = [ "ativo", "inativo"];
const eventListUseCase = require('../core/events/event-list.usecase');
const eventListMapper = require('../mapper/events/event-list.mapper');


const eventList = (req, res) => { 
    
    //todo: extrair dados
    console.log(req.id);
    const id = req.id.status;
    
    //todo: validar os dados     
    if (id) {
        
        if(!eventStatus.includes(req.id.status))            
        return res.status(400).json({
            mensagem: "",
        }) 
    }
    
    //todo: transformando dados da entrada em objetos de negocio FALTOU
    

    //todo: camada de negocio
    const ucResult = eventListUseCase({ status: id})

    //todo: montar objeto de saida 
    res.json(eventListMapper.domainToDTO(ucResult)); 
  
}

const eventDisplay = (req, res) => {
    console.log(req.params);

    const id = req.params.id;

    if (!id || id == ' ') {
                  
        return res.status(400).json({
            mensagem: "Event id uninformed",
        }) 
    }

    res.json({
        id: 'jlkjlklkj',
        description: '',
        status: '',
        inscriptions: [

        ]
    })
}


module.exports = {

    eventList,
    eventDisplay,

}
