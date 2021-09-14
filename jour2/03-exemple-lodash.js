// 03-exemple-lodash.js

// comme pour les autres types de module 
// require()
// si nous avions créer le module à la main require("./lodash")
// le chemin relatif

// module natif
// require("http")

// module télécharger (et disponible dans le dossier node_modules)
// require("lodash")

const _ = require("lodash");

// https://lodash.com/
// https://lodash.com/docs/

// donne des fonctionnalités (fonctions qui ne sont pas présentes dans javascript)

const tableau = ["Renault" , "Peugeot", "Citroën"];

// récupérer le dernier élément du tableau 
// en js de base 
const dernierElement = tableau[tableau.length - 1];
console.log(dernierElement);

// avec Lodash 
console.log(_.last(tableau));

const notes = [ 20, 17 , 17 , 12 , 2 , 2 , 20 , 14 , 17];
// obtenir le tableau notes sans doublon

// avec Lodash 
console.log(_.uniq(notes) , notes);

// générer numéro unique => (clé primaire pour une base de données)

console.log(_.uniqueId())
console.log(_.uniqueId())
console.log(_.uniqueId())

// collection [{}, {} ,{}]

const etudiants = [
    {id : 1 , nom : "Pierre" },
    {id : 34 , nom : "Béatrice"}
];

// est ce que la collection etudiants contient un élément dont le nom == Béatrice

const verif = _.filter( etudiants , function(etudiant){ 
    return etudiant.nom === "Béatrice"
} );

console.log(_.isEmpty(verif));

// verifier si une variable est vide ?? 
// _.isEmpty()

const vide = [ "" , null , {} , [] , false , 0 ];
vide.forEach(function (element){
    console.log(_.isEmpty(element));
} )

"".length == 0 
isNull(null)
Object.keys.length({})
Object.keys.length([])
false == false 
0 === 0 

// installer la librairie qui s'appelle underscore (équivalent de lodash)
// créer un nouveau fichier 04-exo.js 
// utiliser la librairie underscore
// créer un tableau [2, 10 , "bonjour", { id: 1 , titre : "lorem"} , false];

// en utilisant undescore => ajouter à la fin du tableau un id unique
// en utilisant undescore => vérifier est ce que ce tableau contient le mot "bonjour"
// en utilisant undescore => vérifier est ce que ce tableau contient la valeur 15
// créer un nouveau tableau [2, 10 , false , "salut"]
// en utilisant undescore => quelles sont les éléments communs entre le 1er et le 2ème tableau 

