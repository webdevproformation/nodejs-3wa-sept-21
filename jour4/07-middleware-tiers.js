// npm i cors
// npm i helmet (casque => éviter certaines attaques effectuées sur votre API réalisée avec express)
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const PORT = process.env.PORT || 1236
const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}
const app = express();

// Access-Control-Allow-Origin http://127.0.0.1:5501
// Access-Control-Allow-Origin *
app.use(helmet());
app.use(cors()); // mettre côté serveur la librairie cors => pas de soucis j'accepte de t'envoyer les informations
// sécurité => limiter les serveurs qui peuvent appeler votre API 
// cors() n'importe quelle serveur / machine peut appeler votre API
// white list des adresses des machines qui peuvent appeler votre API sans avoir d'erreur CORS 
// http://expressjs.com/en/resources/middleware/cors.html

// sécurité projet node express : https://expressjs.com/fr/advanced/best-practice-security.html


app.get("/", (req, rep) => {
    rep.send("bienvenu sur mon site !! ")
});

app.listen(PORT , () => console.log(PORT));
// nodemon 07-middleware-tiers.js
// 07-index.html