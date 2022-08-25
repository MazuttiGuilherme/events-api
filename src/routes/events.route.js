const { eventList, eventDisplay } = require('../controllers/events.controller');
const { insertInscription } = require('../controllers/inscriptions.controller');
const { validateDTO } = require('../util/dto-validate.middleware');
const { insertInscriptionBodyDto, insertInscriptionParamsDto } = require('../dto/insert-inscription');

const eventsRoute = (app) => {
    
  app.get('/events', eventList);
  app.get('/events/:id', eventDisplay);
  app.post(
    '/events/:id/inscription', 
    validateDTO('params', insertInscriptionParamsDto), 
    validateDTO('body', insertInscriptionBodyDto), 
    insertInscription
  );
}

module.exports = eventsRoute
