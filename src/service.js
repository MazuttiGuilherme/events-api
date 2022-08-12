const express = require("express");
const app = express();
const cursoRoutes = require('./routes/cursos.route');

//const middleware = rerquire('./util/middlewareLocal');

app.use(express.json());

cursoRoutes(app);

//app.post("/user/auth", function () {
//  resizeBy.json({
//    token: "243243243423423",
//  });
//});



module.exports = app;
