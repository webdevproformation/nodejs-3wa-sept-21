const express = require("express")

const app = express();
const PORT = process.env.PORT || 2222 ;
function modifBody(req, rep, next){
    req.body.gender = (req.body.gender == "male") ? "homme" : "femme";
    let maintenant = new Date();
    req.body.dt_creation = `${maintenant.getDate()}/${maintenant.getMonth() + 1}/${maintenant.getFullYear()}`
    next();
}
app.post("/" , [ express.json() , modifBody ] , (req, rep) => {
    rep.send(req.body);
})
app.listen(PORT , () => console.log(`ok sur le port ${PORT}` ));
// nodemon 05-exo.js