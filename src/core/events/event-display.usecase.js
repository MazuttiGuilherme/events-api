const eventRepository = require('../../infra/data/repositories/event.repository');
const inscriptionRepository = require('../../infra/data/repositories/inscription.repository');


module.exports = (id) => {

    const events = eventRepository.findById(id);

    if(!events) {
        return undefined;
    }

    let inscriptionsList = inscriptionRepository.search({
        eventId: id
    })

    events.inscriptions = inscriptionsList;
    return events;

}
