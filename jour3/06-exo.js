const express = require("express");
const {readFile} = require("fs");

const app = express();
app.get("/", (req, res) =>{
    res.send("bonjour les amis")
});
app.get("/porfolio", (req, res) =>{ 
    readFile("05-porfolio.html", "utf8", (err, file) =>{
        res.send(file);
    })
});
app.get("/data.json", (req, res) =>{ 
    readFile("05-data.json", "utf8", (err, file) =>{
        res.send(file);
    })
});
app.get("/article/1", (req, res) =>{ 
    readFile("05-article.json", "utf8", (err, file) =>{
        res.send(file);
    })
});
app.listen(5555 , function(){
    console.log("serveur démarré")
})
// nodemon 06-exo.js

/**
 * https://www.json-generator.com
 * [
  '{{repeat(1)}}',
  {
    _id: '{{objectId()}}',
    titre: '{{lorem(5, "words")}}',
    contenu: '{{lorem(5, "paragraphs")}}}',
    categories: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ]
  }
]
 * 
 * 
 */