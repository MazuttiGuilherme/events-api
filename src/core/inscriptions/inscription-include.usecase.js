const EventsRepository = require('../../infra/data/repositories/event.repository');
const inscriptionRepository = require('../../infra/data/repositories/inscription.repository')

const { BusinessError } = require('../errors/business.error')


module.exports = (model) => {

    const { eventId, email, name } = model;

    //todo: validar se o curso existe
    const event = EventsRepository.findById(eventId);
    if(!event)
        throw new BusinessError('Reported course does not exist')

    //todo: validar se o aluno já está cadastrado naquele curso
    const inscriptions = inscriptionRepository.search({
        eventId: eventId,
    });
    if (inscriptions.find(item => {
        return item.email == email
    }))
        throw new BusinessError('User already registered')

    //todo: salvar dados no banco
    const inscription = inscriptionRepository.create({
        eventId,
        email,
        name
    })

    return inscription;
}
