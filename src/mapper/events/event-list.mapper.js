const DTOToDomain = ({}) => {

} 


const domainToDTO = (eventList) => {
    
    
    return {

        total: eventList.length,
        cursos: [
            ... eventList.map(item => {
                return {
                    id: item.id,
                    description: item.description,
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
