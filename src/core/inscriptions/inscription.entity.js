module.exports = class InscriptionEntity {

    constructor(
        id,
        eventId,
        registerDate,
        cancelDate,
        userEmail,
        userName,
        status

    ) {

        this.id = id;
        this.eventId = eventId;
        this.registerDate = registerDate;
        this.cancelDate = cancelDate;
        this.userEmail = userEmail;
        this.userName = userName;
        this.status = status
    }

    static build(
        id,
        eventId,
        registerDate,
        cancelDate,
        userEmail,
        userName
    ) {

        let status = 'active';
        if (cancelDate && cancelDate !== ' ' && cancelDate !== '') {
            status = 'inactive';
        }

        return new InscriptionEntity(
            id,
            eventId,
            registerDate,
            cancelDate,
            userEmail,
            userName,
            status
        )

    }
}