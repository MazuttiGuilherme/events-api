const EventsRepository = require('../../infra/data/repositories/event.repository');
const inscriptionRepository = require('../../infra/data/repositories/inscription.repository')

const { BusinessError } = require('../errors/business.error')


module.exports = (model) => {

    const { event_id, user_email, user_name } = model;

    //todo: validar se o curso existe
    const event = EventsRepository.findById(event_id);
    if(!event)
        throw new BusinessError('Reported course does not exist')

    //todo: validar se o aluno já está cadastrado naquele curso
    const inscriptions = inscriptionRepository.search({
        event_id: event_id,
    });
    console.log(inscriptions, user_email)
    if (inscriptions.find(item => {
        
        return item.user_email == user_email
    }))
        throw new BusinessError('User already registered')

    //todo: salvar dados no banco
    const inscription = inscriptionRepository.create({
        event_id,
        user_email,
        user_name
    })

    return inscription;
}
