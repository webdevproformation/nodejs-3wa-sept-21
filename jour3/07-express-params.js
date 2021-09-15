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
// nodemon 07-express-params.js rdv 14h00 // bon appétit !!

// créer un fichier 08-exo.js
// créer un serveur express 

// collection (voir la suite)

// si vous appelez la route http://localhost:1235/ => récupérer toutes les données stockées dans la collection

// si vous appelez la route http://localhost:1235/categorie/<mots>
// retourner tous les articles qui ont <mots> dans leur valeur tag
// si le mot recherché n'appartient à aucun article => retourner une réponse 404
// le texte "aucun article ne contient le <mot> dans ses tags"

// tester via postman que tout fonctionne correctement


/*
[
  {
    "_id": "6141e191f611621a4e6d3921",
    "titre": "dolor ipsum velit eiusmod aute",
    "contenu": "Mollit deserunt ad mollit tempor esse deserunt do nostrud mollit veniam. In ipsum minim sunt consectetur non esse laboris nisi labore non occaecat cupidatat mollit occaecat. Id exercitation exercitation velit nostrud ex. Minim consectetur eu dolor aliqua consectetur do aliqua exercitation. Ea minim sint non nulla nisi ut labore ipsum velit elit ullamco.}",
    "categories": [
      "ex",
      "ut",
      "id",
      "eu",
      "Lorem",
      "labore",
      "tempor"
    ]
  },
  {
    "_id": "6141e191195f48aeabcdf5eb",
    "titre": "consectetur consectetur laborum commodo nisi",
    "contenu": "Cupidatat tempor pariatur est laboris nisi commodo sit laborum deserunt amet. Laboris et ex nulla dolore esse eu dolore quis proident. Labore elit amet et aute. Aute id magna dolore cillum magna veniam irure ea dolor dolor non. Officia deserunt incididunt ad et adipisicing.}",
    "categories": [
      "magna",
      "amet",
      "eiusmod",
      "in",
      "velit",
      "consectetur",
      "aliquip"
    ]
  },
  {
    "_id": "6141e19155c3a1577614aea9",
    "titre": "culpa sunt laboris ipsum voluptate",
    "contenu": "Ullamco sunt velit fugiat incididunt laboris velit proident pariatur eiusmod exercitation exercitation sint aute occaecat. In id sunt ullamco eiusmod eiusmod adipisicing magna consectetur quis laboris adipisicing nisi tempor proident. Aute adipisicing exercitation enim velit enim eu magna labore laboris ipsum cillum fugiat tempor mollit. Sit anim esse ea laborum ipsum consequat sint aliquip dolore ipsum sint exercitation ad. Tempor pariatur nulla in sunt ea et elit.}",
    "categories": [
      "ex",
      "reprehenderit",
      "ullamco",
      "occaecat",
      "laborum",
      "sit",
      "velit"
    ]
  },
  {
    "_id": "6141e1915b32ebde908d3789",
    "titre": "ea ea fugiat deserunt Lorem",
    "contenu": "Anim magna consectetur nostrud do incididunt nostrud incididunt officia Lorem. Officia commodo mollit nulla anim qui adipisicing qui commodo eu. Proident occaecat eu Lorem sit laboris. Esse voluptate in consectetur exercitation fugiat occaecat. In exercitation anim tempor esse amet adipisicing sit commodo cillum enim.}",
    "categories": [
      "excepteur",
      "in",
      "voluptate",
      "non",
      "magna",
      "cillum",
      "aliqua"
    ]
  },
  {
    "_id": "6141e1914c323015a3919807",
    "titre": "pariatur deserunt qui culpa culpa",
    "contenu": "Ipsum excepteur cillum minim qui ea do laboris in do id duis veniam nostrud. Veniam consectetur dolor officia cillum Lorem. Occaecat magna pariatur commodo ullamco ea pariatur duis dolore dolore id occaecat excepteur dolore. Id eu proident exercitation laboris eu duis commodo. Incididunt irure anim excepteur dolore reprehenderit excepteur nostrud consectetur sit aliqua exercitation.}",
    "categories": [
      "qui",
      "sint",
      "sint",
      "elit",
      "do",
      "velit",
      "laboris"
    ]
  }
]


*/