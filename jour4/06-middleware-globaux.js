// 06-middleware-globaux.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 1235;

// middleware qui s'applique à toutes les routes que j'ai créées

function middlewareAll(req, rep , next){
    console.log(req.path)
    next();
}
app.use(middlewareAll);

function middlewareAccueil(req, rep , next){
    console.log("je suis dans la page d'accueil");
    next();
}

app.get("/" , middlewareAccueil , (req, rep) => {
    rep.send("page d'accueil")
})

app.get("/contact", (req, rep) => {
    rep.send("page contact")
})
app.get("/admin", (req, rep) => {
    rep.send("page admin")
})

app.listen(PORT , ()=> console.log(PORT))
// nodemon 06-middleware-globaux.js