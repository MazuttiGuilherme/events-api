const DTOToDomain = ({}) => {

} 


const domainToDTO = (eventList) => {
    
    
    return {

        total: eventList.length,
        cursos: [
            ... eventList.map(item => {
                return {
                    id: item.id,
                    descricao: item.descricao,
                    status: item.status
                }
            })
        ]
    }

} 



module.exports = {
    DTOToDomain,
    domainToDTO
}
