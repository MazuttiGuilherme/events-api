const InscriptionEntity = require('../../../core/inscriptions/inscription.entity');


const data = [
    {
        id: '121212',
        event_id: '1',
        register_date: '2022-08-19',
        user_email: 'email@test.com',
        user_name: 'Guilherme Mazutti',
    },
  ]

const search = ({ eventId }) => {

    let resultFromDB = data;
    if (eventId) {
        resultFromDB =  data.filter(item => item.event_id == eventId)                    
    }

    //extrair lógica de conversão de dataObject para Entity
    return resultFromDB.map(item => {

        const {
            id,
            event_id,
            register_date,
            cancel_date,
            user_email,
            user_name,
        } = item;

        return InscriptionEntity.build(
            id,
            event_id,
            register_date,
            cancel_date,
            user_email,
            user_name
        )
    });

}

const create = (model) => {

    const newItem = {
        id: '121213',
        event_id: model.eventId,
        register_date: '2022-08-21',
        user_email: model.userEmail,
        user_name: model.userName,
    }

    data.push(newItem);

    return InscriptionEntity.build(
        newItem.id,
        model.eventId,
        newItem.register_date,
        model.userEmail,
        model.userName
    );
}

const findById = (id) => {

    return data.find(item => {
        return item.id == id
    })
}

const update = (model) => {
    const item = data.find(item => item.id == model.id);

    item.cancel_date = model.cancel_date;
}

module.exports = {
    search,
    create,
    findById,
    update
}