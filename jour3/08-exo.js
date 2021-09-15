const data = require("./08-data");
const express = require("express");
const app = express();
app.get("/", (req , rep) => {
    rep.send(data);
});
app.get("/categorie/:mot" , (req, rep) => {
    const mot = req.params.mot;
    const reponse = data.filter( article => {
        return article.categories.includes(mot)
    } );
    if(reponse.length > 0){
        return rep.send(reponse);
    }
    return rep.send(`aucun article ne contient "${mot}" dans ses tags`);
})
app.listen(1235 , () => {
    console.log("ok")
})

// GET 
// POST => permet d'ajoute d'ajouter une nouvelle valeur

// 09-post.js
