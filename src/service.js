const express = require("express");
const app = express();
const eventRoutes = require('./presentation/routes/events.route');
const inscriptionsRoute = require("./presentation/routes/inscriptions.route");

//const middleware = rerquire('./util/middlewareLocal');

app.use(express.json());

eventRoutes(app);
inscriptionsRoute(app);

//app.post("/user/auth", function () {
//  resizeBy.json({
//    token: "243243243423423",
//  });
//});



module.exports = app;
