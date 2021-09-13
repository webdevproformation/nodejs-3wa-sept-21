const fs = require("fs");

let nb = 0
for(let i in fs){
    nb++;
}
console.log(nb); // 99 membres 
// https://nodejs.org/docs/latest-v14.x/api/fs.html


// si vous regardez les différentes méthodes proposées par ce module natif
// 2 versions 
// path.opendir() => Asynchrone
// path.opendirSync() => Synchrone

// programme synchrone => exécute dans l'ordre dans lequel tu l'as écrit 

const i = 20;
console.log(i);
const j = "hello";
console.log(j);

// programme asynchrone 
// le programme s'exécute dans un ordre différent ce celui que vous avez écrit 

let k = [];
setTimeout( function(){ 
    k = [1,2,3];
} ); // exécuté APRES le console.log( )
console.log(k); // = [ ], il n'est pas égal [1,2,3]
// programme asynchrone 

// pourquoi ?? 
// asynchrone => éviter de bloquer le processeur 
// javascript est un langage qui est exécuté avec un seul processus dans le processeur 
// javascript est un langage monothread 

let y = []; // 1
setTimeout( function() {
    for(let i = 0 ; i < 1000000 ; i++){
        y.push(i)
    }
    console.log(y); // 4
    // effectuer des instructions qui sont lourdes sans bloquer le processeur
})
console.log(y); // 2
// asynchrone
fs.readFile( "15-exo.js" , "utf8", function( error , fichier  ){
    if( !error ){
        console.log(fichier); // 5
    }
} )


// sync
const fichier = fs.readFileSync( "15-exo.js" , { encoding : "utf8" }  );// 3
console.log(fichier); // 3
