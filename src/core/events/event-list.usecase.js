const eventRepository = require('../../infra/data/repositories/event.repository')

module.exports = ({ status }) => {

    const filter = {
        status

    };

    const resultFromDB = eventRepository.search({ status });
   
    return resultFromDB;

}
