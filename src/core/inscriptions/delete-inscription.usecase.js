// const EventsRepository = require('../../infra/data/repositories/event.repository');
const inscriptionRepository = require('../../infra/data/repositories/inscription.repository');

const { BusinessError } = require('../errors/business.error')


module.exports = (model) => {

    const { inscriptionId } = model;

    //todo: validar se a inscrição existe
    const inscription = inscriptionRepository.findById(inscriptionId);
    if(!inscription)
       throw new BusinessError('Inscription reported does not exist');

       inscription.cancel_date = new Date();
;
   
    inscriptionRepository.update(inscription);

    return;
}
