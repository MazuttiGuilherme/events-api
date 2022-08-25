const dtoToDomain = ({}) => {

    
} 

const domainToDto = ({inscription}) => {
    
    return {
        message: 'Successful registration',
        inscription: {
            id: inscription.id,
            registerDate: inscription.registerDate, 
            name: inscription.name,
            status: inscription.status
        }
    }
} 



module.exports = {
    dtoToDomain,
    domainToDto
}
