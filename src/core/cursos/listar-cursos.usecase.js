const data = [
    
    {
        id: "1",
        descricao: "teste 1",
        status: "ativo",

    },

    {
        id: "2",
        descricao: "teste 2",
        status: "inativo",
    }
]



module.exports = ({ status }) => {

    let resultFromDB = data;
    if (status) {
        resultFromDB =  data.filter(item => item.status == status)                    
    }

    return resultFromDB;

}
