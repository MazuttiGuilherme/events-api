const cursosStatus = [ "ativo", "inativo"];
const listaCursoUseCase = require('../core/cursos/listar-cursos.usecase');
const listaCursoMapper = require('../mapper/cursos/lista-curso.mapper');


const listaCurso = (req, res) => { 
    
    //todo: extrair dados
    console.log(req.query);
    const query = req.query.status;
    
    //todo: validar os dados     
    if (query) {
        
        if(!cursosStatus.includes(req.query.status))            
        return res.status(400).json({
            mensagem: "",
        }) 
    }
    
    //todo: transformando dados da entra em objetos de negocio
    

    //todo: camada de negocio
    const ucResult = listaCursoUseCase({ status: query})

    //todo: montar objeto de saida 
    res.json(listaCursoMapper.domainToDTO(ucResult)); 
  
}


module.exports = {

    listaCurso,

}
