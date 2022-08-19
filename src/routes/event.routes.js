const { eventList } = require('../controllers/events.controller');

const eventRoutes = (app) => {
    
  app.get("/events", eventList);
}

module.exports = eventRoutes;
