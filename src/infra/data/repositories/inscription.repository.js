const InscriptionEntity = require('../../../core/inscriptions/inscription.entity');


const data = [
    {
        id: '121212',
        eventId: '1',
        registerDate: '2022-08-19',
        email: 'email',
        name: 'Guilherme Mazutti',
    }
  ]

const search = ({ eventId }) => {

    let resultFromDB = data;
    if (eventId) {
        resultFromDB =  data.filter(item => item.eventId == eventId)                    
    }

    //extrair lógica de conversão de dataObject para Entity
    return resultFromDB.map(item => {

        const {
            id,
            eventId,
            registerDate,
            email,
            name,
        } = item;

        return InscriptionEntity.build(
            id,
            eventId,
            registerDate,
            undefined,
            email,
            name
        )
    });

}
module.exports = {

    search,

}