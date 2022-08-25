const InscriptionEntity = require('../../../core/inscriptions/inscription.entity');


const data = [
    {
        id: '121212',
        eventId: '1',
        registerDate: '2022-08-19',
        email: 'email@test.com',
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

const create = (model) => {

    const newItem = {
        id: '121213',
        eventId: model.eventId,
        registerDate: '2022-08-21',
        email: model.email,
        name: model.name,
    }

    data.push(newItem);

    return InscriptionEntity.build(
        newItem.id,
        model.eventId,
        newItem.registerDate,
        model.email,
        model.name
    );
}

module.exports = {
    search,
    create
}