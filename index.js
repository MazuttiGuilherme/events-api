const service = require('./src/service');

const porta = process.env.PORT || 3000;


const listener = service.listen(porta, function () {
  console.log("Node.js listening on port " + listener.address().port);
});
