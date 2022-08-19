module.exports = class InscriptionEntity {

    constructor(
        id,
        eventId,
        registerDate,
        cancelDate,
        email,
        name,
        status

    ) {

        this.id = id;
        this.eventId = eventId;
        this.registerDate = registerDate;
        this.cancelDate = cancelDate;
        this.email = email;
        this.name = name;
        this.status = status
    }

    static build(
        id,
        eventId,
        registerDate,
        cancelDate,
        email,
        name,
        status
    ) {

        let status = 'ativo';
        if (!cancelDate && cancelDate !== ' ' && cancelDate !== '' ) {
            status = 'inativo';
        }

        return new InscriptionEntity (
            id,
            eventId,
            registerDate,
            cancelDate,
            email,
            name,
            status
        )

    }
}