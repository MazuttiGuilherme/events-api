const { eventList, eventDisplay } = require('../controllers/events.controller');

const eventRoutes = (app) => {
    
  app.get("/events", eventList);
  app.get("/events/:id", eventDisplay);
}

module.exports = eventRoutes;
