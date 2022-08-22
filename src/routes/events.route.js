const { eventList, eventDisplay } = require('../controllers/events.controller');

const eventsRoute = (app) => {
    
  app.get('/events', eventList);
  app.get('/events/:id', eventDisplay);

  app.post('/events/:id/inscription', (req, res) => {

    console.log(req.params);
    console.log(req.body);

    res.json ({
      message: "success!",
      inscription: {
        id: '1',
        registerDate: '2022-08-122',
        name: 'fdsfdsfds',
        status: 'fdsfdsfds'

      } 
    });

  });

}

module.exports = eventsRoute;
