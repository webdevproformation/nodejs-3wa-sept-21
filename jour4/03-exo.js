const data = [{
    "id": 1,
    "isActive": true,
    "name": "Peck Hawkins"
  }];
const express = require("express");
const {schema , schemaProd} = require("./03-validation");
const PORT = process.env.PORT || 1235 ;
const app = express();
const env = app.get("env");
app.use(express.json());
app.post("/" , (req, rep) => {
    const body = req.body;
    if(env == "production"){
        const {value , error} = schemaProd.validate(body);
        if(error != undefined){
            return rep.status(400).send(error.message);
        }
    } else {
        const {value , error} = schema.validate(body);
        if(error != undefined){
            return rep.status(400).send(error.message);
        }
    }
    data.push(body);
    rep.send(data);
} );
app.listen (PORT , () => console.log(`serveur écoute sur le port ${PORT}`));

// (export PORT=12025) -and (nodemon 03-exo.js)
// "export PORT=12025" -and "nodemon 03-exo.js"
// "set PORT=12025" -and "nodemon 03-exo.js"
// "set PORT=12025" -and "nodemon 03-exo.js"
// $env:PORT=12026 -and "nodemon 03-exo.js"
// comment créer des variables d'environnement ET 
// chainer des commandes l'un après l'autre 
// $env:NODE_ENV="production" 

// export NODE_ENV=production && export PORT=12025 && nodemon 03-exo.js

// rdv 14h00 => express middleware !

// 04-middleware.js