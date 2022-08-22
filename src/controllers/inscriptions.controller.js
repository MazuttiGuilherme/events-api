const insertInscriptionMapper = require('../mapper/inscriptions/insert-inscription.mapper');
const deleteInscriptionMapper = require('../mapper/inscriptions/delete-inscription.mapper');
const joi = require('joi');


const insertInscription = (req, res) => { 
    
    //todo: extrair dados
    const { params, body } = req;

    console.log(params)
    const paramSchema = joi.object({
        id: joi.number().required(),
    });    
    
    const paramResult = paramSchema.validate(params);
    if (paramResult.error) {

        const { details } = paramResult.error;                

        const detailsMessages = details.reduce((acc, item) => {

            return [ ...acc, item.message ]
        
        }, [])

        return res.status(400).json({
            message: detailsMessages.join(';')
        });                        
    }



    console.log(body);
    const bodySchema = joi.object({
        name: joi.string().min(8).max(15).required(),
        email: joi.string().email().required(),
    })

    const bodyResult = bodySchema.validate(body);
    if (bodyResult.error) {

        const { details } = bodyResult.error;                

        const detailsMessages = details.reduce((acc, item) => {

            return [ ...acc, item.message ]
        
        }, [])

        return res.status(400).json({
            message: detailsMessages.join(';')
        });
    }
        
        res.json(insertInscriptionMapper.domainToDto({})); 

    
    }
    
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