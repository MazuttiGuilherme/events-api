const joi = require('joi');

const insertInscriptionBodyDto = joi.object({
    name: joi.string().min(8).max(15).required(),
    email: joi.string().email().required(),
});

const insertInscriptionParamsDto = joi.object({
    id: joi.number().required(),
});

module.exports = {
    insertInscriptionBodyDto,
    insertInscriptionParamsDto,
}