const insertInscriptionMapper = require("../mapper/inscriptions/insert-inscription.mapper");
const deleteInscriptionMapper = require("../mapper/inscriptions/delete-inscription.mapper");
const joi = require("joi");
const inscriptionIncludeUsecase = require("../../core/inscriptions/inscription-include.usecase");
const deleteInscriptionUseCase = require("../../core/inscriptions/delete-inscription.usecase");



const insertInscription = (req, res) => {
  try {
    //todo: extrair dados
    const { params, body } = req;

    //todo: transformando dados de entrada em objetos de negócio
    //todo: remover lógica para o mapper
    const domain = {
      event_id: params.id,
      user_name: body.name,
      user_email: body.email,
    };
    //todo: camada de negócio
    const inscription = inscriptionIncludeUsecase(domain);

    //todo: montar objeto de saída
    return res.json(insertInscriptionMapper.domainToDto({ inscription }));
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Internal server error",
    });
  }
};

const deleteInscription = (req, res) => {
  try {
    //todo: extrair dados
    const { params } = req;
    console.log(params);

    //todo: transformando dados da entra em objetos de negocio FALTOU
    const model = {
      inscriptionId: params.id,
    };
    //todo: camada de negocio
    deleteInscriptionUseCase(model);

    //todo: montar objeto de saida
    res.json(deleteInscriptionMapper.domainToDto({}));

  } catch (error) {

    return res.status(error.statusCode || 500).json({
      message: error.statusCode ? error.message : "Internal server Error",
    });
  }
};

module.exports = {
  insertInscription,
  deleteInscription,
};
