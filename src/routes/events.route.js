const { eventList, eventDisplay } = require('../controllers/events.controller');
const { insertInscription } = require('../controllers/inscriptions.controller');

const eventsRoute = (app) => {
    
  app.get('/events', eventList);
  app.get('/events/:id', eventDisplay);

  app.post('/events/:id/inscription', insertInscription);
}

module.exports = eventsRoute
