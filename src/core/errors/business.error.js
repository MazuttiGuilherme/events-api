module.exports.BusinessError = class BusinessError extends Error {

    constructor(message) {

        super(message);
        this.statusCode = 400;
    }
}