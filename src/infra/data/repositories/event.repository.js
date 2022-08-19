const EventEntity = require('../../../core/events/event.entity');


const data = [
    
    {
        id: "1",
        description: "teste 1",
        status: "ativo",

    },

    {
        id: "2",
        description: "teste 2",
        status: "inativo",
    }
]


const search = ({ status }) => {

    let resultFromDB = data;

    if (status) {
        resultFromDB =  data.filter(item => item.status == status)                    
    }

    //extrair lógica de conversão de dataObject para Entity

    return resultFromDB.map(item => {

        const {
            id,
            description,
            status
        } = item;

        return EventEntity.build(
            id,
            description,
            status
        )
    });

}
module.exports = {

    search,

}