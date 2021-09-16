const express = require("express");
const app = express();
const PORT = process.env.PORT || 1235;

function middlewareAccueil(req, rep , next){
    console.log("je suis dans la page contact");
    next();
}

function middlewareAll(req, rep , next){
    console.log(req.path)
    next();
}

app.use("/contact" ,[ middlewareAccueil , middlewareAll ]);

app.get("/" , function(req,rep){
    rep.send("fin je suis dans la page d'accueil")
})

app.get("/contact" , function(req,rep){
    rep.send("fin la page de contact")
})
// middle global TOUJOURS AVANT middle local
app.listen(PORT , ()=> console.log(PORT))
// nodemon 06-middleware-special.js

// build in middleware express.json()

// middle tiers => helmet() // CORS() // morgan()
// https://expressjs.com/en/resources/middleware.html

// moteur de rendu html PHP 

// base de données => MongoDB