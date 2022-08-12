const { listaCurso } = require('../controllers/cursos.controller');

const cursoRoutes = (app) => {
    
  app.get("/curso", listaCurso);
}

module.exports = cursoRoutes;
