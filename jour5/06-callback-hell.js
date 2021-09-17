// 06-callback-hell.js 

// si vous voulez enchainez plusieurs callback l'un après l'autre 

let r = [];

// ajouter une information [ {id : 1 , nom : "Alain"} ] => exécutée dans 2 secondes

// ajouter une information [ {id : 1 , nom : "Alain" , age : 22 } ] => exécutée dans 2 secondes plus tard

setTimeout( () => { 
    console.log("etape 1")
    r = [ {id : 1 , nom : "Alain"} ];
    setTimeout( () => {
        console.log("etape 2")
        r[0].age = 22 ;
        console.log(r); // fin du programme 
    } , 2000)
 }, 2000 );
//callback hell => le programme se finit au milieu 
// Pyramid of doom


// pour simplifier l'écrire ( éviter d'avoir à écrire du code ) : Promise 
// en 2015 

const p = new Promise( ( resolve , reject ) => { 
    setTimeout( () => { 
        console.log("etape 1")
        resolve([ {id : 2 , nom : "Béatrice"} ])
    }, 2000)
} )
const q = new Promise ( ( resolve , reject ) => {
    setTimeout( () => { 
        console.log("etape 2")
        resolve([ { id : 3 , nom : "Charles"} ])
    }, 2000)
}  )

p.then( ( result) => { 
    console.log( result ) ; 
    q.then( (result ) => { console.log( result )  } )
 }  );
// 07-promesse.js


