const service = require('./src/service');

const porta = process.env.PORTA || 3000;


const listener = app.listen(porta, function () {
  console.log("Node.js listening on port " + listener.address().port);
});
