// appeler mon serveur article/1
// appeler mon serveur article/2
// appeler mon serveur article/3

const express = require("express");
const app = express();

const data = [
    {id : 1 , titre : "article 1" },
    {id : 2 , titre : "article 2" },
    {id : 3 , titre : "article 3" }
];

app.get("/article/:id" , (req, res) => {
    const id = req.params.id ;

    const articleRecherche = data.filter( function(item){ return item.id == id } )

    if(articleRecherche.length > 0){
        return res.send(articleRecherche);
    }
    res.status(404).send(`l'article ${id} n'existe pas`);
    // change le code du serveur => 404 (robots des moteurs de recherche)
    //                          text pour un humain l'article n'existe pas 
});

app.listen(1234 , () => {
    console.log("le serveur est démarré");
});
// nodemon 07-express-params.js