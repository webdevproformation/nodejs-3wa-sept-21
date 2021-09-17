const express = require("express");
const pug = require("pug");
const Joi = require("joi");
const data = [{ id : 12 , prenom : "Alain" , age : 22 } ]
const PORT = process.env.PORT || 1234
const app = express();

const schema = Joi.object({
    id : Joi.number().greater(0).required(),
    prenom : Joi.string().min(3).max(200).required(),
    age : Joi.number().greater(0).required(),
});

function update(req, rep, next){
    const id = req.params.id ;
    const aModifier = data.find( item =>  item.id == id );

    if(aModifier == undefined){
        return rep.status(404).send(`aucun enregistrement n'a l'id ${id}`)
    }

    const body = req.body ;
    const {value , error} = schema.validate(body, {abortEarly : false})
    if(error != undefined){
        return rep.status(400).send(error.message);
    }

    // modification 
    const index = data.indexOf(aModifier);
    data.splice(index,1, body);
    next();
}

app.put("/:id" , [express.json() , update] , (req, rep) => {
    const body = req.body ;
    const file = pug.compileFile("01-exo.pug")
    rep.send(file(body))
});


app.listen(PORT , () => console.log(`ok ${PORT}`));
