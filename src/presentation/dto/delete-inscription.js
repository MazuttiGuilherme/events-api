const joi = require('joi');

const deleteInscriptionParamsDto = joi.object({
    id: joi.number().required()
});

module.exports = {
    deleteInscriptionParamsDto,
}