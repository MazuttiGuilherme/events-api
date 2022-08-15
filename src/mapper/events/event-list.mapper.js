const DTOToDomain = ({}) => {

} 


const domainToDTO = (Eventlist) => {
    
    
    return {

        total: Eventlist.length,
        cursos: [
            ... Eventlist.map(item => {
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
