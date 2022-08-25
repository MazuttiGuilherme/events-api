//const Joi = require('joi');

const createDetails = (error) => {
    return error.details.reduce((acc, item) => {

        console.log(acc);
        
        console.log(item);

        return [
            ...acc, item.message
        ];
    }, []);
}

exports.validateDTO = (context, schema) => {

    return (req, res, next) => {

        try {

            const { value, error } = schema.validate(req[context], {
                allowUnknown: false,
            });

            req[context] = value;

            return error ? res.status(400).send({
                message: createDetails(error).join(';'),
            }) : next();
        
        } catch (error) {
            console.log(error);
        }
    }
}