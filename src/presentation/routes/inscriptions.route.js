const { eventList, eventDisplay } = require('../controllers/events.controller');
const { insertInscription } = require('../controllers/inscriptions.controller');


const inscriptionsRoute = (app) => {
    
  app.delete('/inscription/:id', (req, res) => {

    return res.status(200).json({
        message: "Removed item successfully"

    });

  }); 

}

module.exports = inscriptionsRoute
