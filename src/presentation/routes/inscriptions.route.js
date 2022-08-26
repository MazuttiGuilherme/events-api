const { validateDTO } = require('../../util/http/dto-validate.middleware');
const { deleteInscriptionParamsDto } = require('../dto/delete-inscription');

const { deleteInscription } = require('../controllers/inscriptions.controller')


const inscriptionsRoute = (app) => {
    
  app.delete(
    '/inscription/:id', 
    validateDTO('params', deleteInscriptionParamsDto),
    deleteInscription 
    
    );


}

module.exports = inscriptionsRoute
