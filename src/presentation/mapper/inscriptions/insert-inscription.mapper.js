const dtoToDomain = ({}) => {

    
} 

const domainToDto = ({inscription}) => {
    
    return {
        message: 'Successful registration',
        inscription: {
            id: inscription.id,
            registerDate: inscription.registerDate, 
            userName: inscription.UserName,
            status: inscription.status
        }
    }
} 



module.exports = {
    dtoToDomain,
    domainToDto
}
