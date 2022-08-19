const eventStatus = [ "ativo", "inativo"];

const { query } = require('express');
const eventDisplayUseCase = require('../core/events/event-display.usecase');

const eventListUseCase = require('../core/events/event-list.usecase');
const eventListMapper = require('../mapper/events/event-list.mapper');


const eventList = (req, res) => { 
}

const eventShow = (req, res)
    //todo: extrair dados
    console.log(req.params);
    const id = req.params.id;
    
    //todo: validar os dados     
    if (!id || id == ' ') {
                  
        return res.status(400).json({
            mensagem: "Event id uninformed",
        }) 
    }
    
    //todo: transformando dados da entrada em objetos de negocio FALTOU
    

    //todo: camada de negocio
    const ucResult = eventListUseCase({ status: query})

    //todo: montar objeto de saida 
    res.json(eventListMapper.domainTo(ucResult)); 
  


const eventDisplay = (req, res) => {
    console.log(req.params);

    const id = req.params.id;

    if (!id || id == ' ') {
                  
        return res.status(400).json({
            mensagem: "Event id uninformed",
        }) 
    }

    const ucResult = eventDisplayUseCase(id);

    res.json({
        id: ucResult.id,
        description: ucResult.description,
        status: ucResult.status,
        inscriptions: [
            ... ucResult.inscriptions.map(item => {
                return {
                    id: item.id,
                    registerDate: item.registerDate,
                    name: item.name,
                    status: item.status
                }
            })
        ]
    })
}


module.exports = {

    eventList,
    eventDisplay
}
