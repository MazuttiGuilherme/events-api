const { EventList } = require('../controllers/events.controller');

const eventRoutes = (app) => {
    
  app.get("/events", EventList);
}

module.exports = eventRoutes;
