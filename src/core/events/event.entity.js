



module.exports = class EventEntity {

    constructor(
        id,
        description,
        status,
        inscriptions
    ) {

        this.id = id;
        this.description = description;
        this.status = status;
        this.inscriptions = inscriptions
    }

    static build(
        id,
        description,
        status,
        inscriptions
    ) {

        let _inscriptions = []
        if (!inscriptions)
            this.inscriptions = _inscriptions

        return new EventEntity (
            id,
            description,
            status,
            inscriptions
        )

    }
}