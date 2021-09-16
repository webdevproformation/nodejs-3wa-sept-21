const Joi = require("joi");

module.exports.schema = Joi.object({
    id : Joi.number().greater(0).required(),
    isActive : Joi.boolean().required(),
    nom : Joi.string().min(3).max(200).required()
});

module.exports.schemaProd = Joi.object({
    // id va être donné par la base de données => mongoDB 
    isActive : Joi.boolean().required(),
    nom : Joi.string().min(3).max(200).required()
});