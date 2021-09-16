const Joi = require("@hapi/joi");

const schema = Joi.string().min(4).max(20);


const {value, error} = schema.validate("coucou")

console.log(error);