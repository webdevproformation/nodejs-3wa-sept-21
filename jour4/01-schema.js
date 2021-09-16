const Joi = require("joi");

module.exports =  Joi.object({
    id : Joi.number().greater(0).required(),
    isActive : Joi.boolean().required(),
    age : Joi.number().greater(0).required(),
    name : Joi.string().min(3).max(200).required(),
    gender : Joi.string().regex(/^female|male$/).required(),
    email : Joi.string().email({tlds: { allow: ['com', 'fr'] }}).required()
});