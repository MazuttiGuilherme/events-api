const EventEntity = require('../../../core/events/event.entity');


const data = [
    
    {
        id: "1",
        description: "test 1",
        status: "active",

    },

    {
        id: "2",
        description: "test 2",
        status: "inactive",
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

const findById = (id) => {

    return data.find(item => {
        return item.id == id
    })
}


module.exports = {

    search,
    findById

}