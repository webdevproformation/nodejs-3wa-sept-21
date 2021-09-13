// this est un mot clé central en javascript 
// ne fonctionne pas comme le mot clé this dans les autres langages de programmation orienté objet comme PHP / Java / Python / C++ 

// this => contexte d'exécution 
// ne représente pas l'objet 
// bon appétit !! rdv dans 1 heure => 14h00 @ toute suite

// rappel / présentation du mot clé this en javascript 
// contexte d'exécution 
// this ne renvoie pas nécessaire à l'objet qu'il contient 

// POO => this ne peut être utilisé QUE l'on crée une class
// en javascript this 

//console.log(this); // {}

//function calcul(){
//    console.log(this); // global
//}
// calcul(); 
// console.log(global);

// en fonction de la MANIERE dont on l'appelle sa valeur va être modifiée 

const arbre = {
    nom : "chene" ,
    description : function(){
        console.log(this);
        console.log(this.nom);
    }
}

// manière classique 
arbre.description(); // this.nom == "chene" 

// stocke dans la variable foret une référence à la méthode description
const foret = arbre.description ; 
console.log(foret);
foret(); // this => global 
        //  ET il ne possède pas de propriété nom => undefined
        // perte de contexte de this 

const foret2 = arbre.description.bind(arbre);
foret2();

const exporter = {};
exporter.action = arbre.description.bind(arbre) ;  // this = { action: [Function: description] }
exporter.action(); // chene

// this dans des callback 

// javascript 
function calcul ( cb ){ // prend comme paramètre une fonction 
    cb( 10, 20 ); // exécuter dans votre fonction calcul 
}

calcul( function( a , b  ){
    console.log ( a + b ); // 30
} );

calcul ( function( a, b ){
    console.log( a * b );  // 200 
} );

// rappel callback 
// en javascript 3 manières de créer des fonctions
// manière 1 de créer des fonctions 
function a(){ }
// manière 2 de créer une fonction créer une variable dans laquelle tu stockes une fonction
const b = function(){ }
// manière 3 fonction fléchée
const c = () => { }

// fonction avec paramètre 

function aire( rayon ){ // le paramètre rayon doit être chiffre
    console.log( Math.PI * rayon ** 2);
}
aire( 10 ); // 314.1592653589793

// MAIS en javascript étant donné qu'il est possible de stocker dans une variable une fonction 

const cercle = function(rayon){ // stocker dans la variable cercle une fonction 
    console.log(2 * Math.PI * rayon );
}

function perimetre ( resultat ){ // défini la fonction perimètre ayant comme paramètre resultat
    resultat( 22 ); // exécuter paramètre (qui contient une fonction => cercle  )
}

perimetre( cercle ); // exécute la fonction perimètre avec comme argument la variable cercle qui est une fonction 138.23007675795088

// ------ 

function genereP( cb ){
    cb("bonjour les amis");
}

genereP( function(texte){
    console.log("<p>"+texte+"</p>"); 
} );// <p>bonjour les amis</p>

// this et callback 




