const insertInscriptionMapper = require('../mapper/inscriptions/insert-inscription.mapper');
const deleteInscriptionMapper = require('../mapper/inscriptions/delete-inscription.mapper');
const joi = require('joi');
const inscriptionIncludeUsecase = require('../../core/inscriptions/inscription-include.usecase');




const insertInscription = (req, res) => { 


    try {
        
        //todo: extrair dados
        const { params, body } = req;

        //todo: transformando dados de entrada em objetos de negócio
        //todo: remover lógica para o mapper
        const domain = {
    
            eventId: params.id,
            name: body.name,
            email: body.email,
        }
        //todo: camada de negócio
        const inscription = inscriptionIncludeUsecase(domain);
    
         //todo: montar objeto de saída
            return res.json(insertInscriptionMapper.domainToDto({ inscription })); 
    
    } catch (error) {

        return res.status(error.statusCode || 500).json({ 
            message: error.statusCode? error.message : "Internal server error"
         }); 
        
    }    
        
}



    


    //todo: camada de negócio
    
    const deleteInscription = (req, res) => {
    
        //todo: extrair dados
        //todo: validar os dados     
        //todo: transformando dados da entra em objetos de negocio FALTOU
        //todo: camada de negocio
        
        //todo: montar objeto de saida
        res.json(deleteInscriptionMapper.domainToDto({})); 
    
    }
    



module.exports = {
    insertInscription,
    deleteInscription
}