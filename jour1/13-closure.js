// 13-closure.js

// en javascript 

const a = 20 ;

// il est possible de l'utiliser dans une déclaration de fonction 

function generer(){
    console.log(a);// utiliser la variable a dans la création de la fonction generer
}

generer();

let b = 10 ;
function augmenter(){
    b = b + 1;
}
augmenter(); // b == 11
augmenter(); // b == 11 MAIS 12 
console.log(b); // il est possible d'utiliser une variable créée AVANT la déclaration de la fonction
//                 ET la fonction garde une trace de l'évolution des variables créées autours d'elle

function diminuer(){
    b = b -20;
}
diminuer(); // 12 - 20 = -8 ET non 10 - 20
augmenter(); // -8 + 1
console.log(b); // -7
// mécanisme de closure 

// combo closure / callback / this 
// javascript de natif => NodeJS ou dans un navigateur => ça fonctionne de la même manière dans deux environnement d'exécution
// module 
// 14-module-natif.js