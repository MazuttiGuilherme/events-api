const middlewareLocal = (req, res, next) => {

    if (req.bacon.id !== 'test2') {
      res.status(401).send('User not authenticated')
    }
    else {
      next()
    }

}


//module.exports = (req, res, next) => {
    
    //if(req.bacon.id !== 'test2') {
    //    res.status(401).send('usuário não autenticado')
    //} else {
    //    next()
    //}

//    console.log('middlewareLocal')

//    next()
//}


module.exports = {
    
    middlewareLocal01: (req, res, next) => {
        
        if(req.bacon.id !== 'test2') {
          res.status(401).send('usuário não autenticado')
        } else {
            next()
        }
   }
}
