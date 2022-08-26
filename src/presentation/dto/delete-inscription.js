const joi = require('joi');

const deleteInscriptionParamsDto = joi.object({
    name: joi.number().required()
});

module.exports = {
    deleteInscriptionParamsDto,
}