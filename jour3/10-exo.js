const express = require("express");
const data = [];
const app = express();
app.use(express.json());
app.get("/:id" , (req, res) => {
    const id = req.params.id;
    const reponse = data.filter((item) => { 
        return item.id == id;
    });
    if(reponse.length > 0){
        return res.send(reponse);
    }
    res.send(`aucun article ayant l'id ${id} n'est disponible`);
});
app.post("/",(req, res) => {
    const body = req.body;
    data.push(body);
    res.send(data);
})
app.listen(1237  , () => console.log("ok"));
// nodemon 10-exo.js
// http://localhost:1237

// put mettre à jour une info
// delete supprimer une

// CRUD : Create Read Update Delete 
// middleware plus en détail de express
// MongoDB (sur votre ordinateur / online service AtlasMongoDB)
// 16h10 @ toute suite !! bon café !! 

// 11-verif.js