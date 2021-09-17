// stopper le server précédent
// 05-async.js

// programme synchrone ?? 

// délai 
// lorsque tu écris du code et que chaque ligne s'exécute dans l'ordre dans lequel tu l'as écrit

// programme synchrone
const i = 10 ;
const j = 20 ;
const resultat = i + j ;
console.log(resultat);
// chaque instruction est exécutée à 100% avant de passer à la suivante

// programme 
// le code ne s'exécute pas dans l'ordre dans lequel vous l'avez écrit 
let r = [];
setTimeout( () => { r = [1,2,3] } ,  1000 );
console.log(r); // bien qu'il soit en dernière position => exécuté avant l'instruction avant

// node 05-async.js
// le fait que javascript n'attend pas que setTimeout() soit fini pour passer au console.log()

// comme faire en sorte que le console.log exécuté APRES la modification de valeur r 

let s = [];
setTimeout( () => {
    s = [3,4,5];
    console.log(s); // je déplace cette instruction => dans le callback après la modif de la valeur s
}, 2000 );


// une autre solution pour exécuté du code après un autre => callback 
// 1 prendre le setTiemout le mettre dans une fonction getData()
// 2 dans la fonction getData() ajouter un parametre cb 
let t = [];

function getData( cb ){
    setTimeout( () => {
        t = [6,7,8];
        cb(t); // remplacer le console.log(t) par le nom du paramètre dans le setTiemout
        // je déplace cette instruction => dans le callback après la modif de la valeur s
    }, 3000 );
}
getData( function( data ){ 
    console.log("utilisation callback" ,  data ) ;
});