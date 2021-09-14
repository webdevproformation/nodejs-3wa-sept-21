// npm i underscore
const _ = require("underscore");

const tableau = [2, 10 , "bonjour", { id: 1 , titre : "lorem"} , false];
// en utilisant undescore => ajouter à la fin du tableau un id unique

tableau.push(_.uniqueId());
console.log(tableau);

// en utilisant undescore => vérifier est ce que ce tableau contient le mot "bonjour"
const verif1 = _.find(tableau , function(element) { return element === "bonjour" });
const verif2 = _.find(tableau , function(element) { return element === 15 });

console.log(verif1 , verif2);

const tableau2 = [2, 10 , false , "salut"];

console.log(_.intersection(tableau , tableau2 ));

// node 04-exo.js