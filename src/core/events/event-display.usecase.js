const eventRepository = require('../../infra/data/repositories/event.repository')


module.exports = (id) => {

    let resultFromDB = eventRepository.findById(id);

    

    return resultFromDB;

}
