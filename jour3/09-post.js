// 09-post.js
const express = require("express");
const data = [];
const app = express();
app.use(express.json()); // middleware express permet de json soit conforme 
app.get("/", function(req, rep){
    rep.send(data);
});
app.post("/", function(req, rep){ 
    // ajouter une nouvelle donnée dans la variable data 
    // récupérer les données envoyées par le client => req.body
    console.log(req.body);
    data.push(req.body);
    rep.send(data);
})
app.listen(1236 , function(){
    console.log("ok");
});