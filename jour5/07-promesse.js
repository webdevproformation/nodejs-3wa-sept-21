const q = function(){
    return new Promise( (resolve, reject) => { 
        setTimeout( () => { 
            console.log("etape 1");
            resolve( [{id : 1 , prenom : "Alain"}] )
        } , 2000)
    })
}
const p = function( data ){
    return new Promise( (resolve , reject) => {
        setTimeout( () => { 
            console.log("etape 2");
            data[0].age = 33
            resolve( data );
        } , 2000)
    } )
}

q().then( ( resultat ) => {  return p(resultat) } )
    .then( (resultat) => console.log( resultat) );

// cas pratique 
// créer le fichier 08-exo.js 
// créer dedans 3 fonctions 
// ranger => est exécuté en 3 secondes => console.log( la chambre est rangée)
// nettoyer =>  est exécuté en 2 secondes => console.log( la chambre est nettoyée)
// manger => est exécutée en 1 seconde  => console.log( j'ai mangé )
// retournent des promesses 

// exécutez ces promesses pour que dans la console les messages s'affichent dans l'ordre suivant :
// manger au bout 1 seconde
// nettoyer affiché au bout de 2 secondes
// ranger  affiché au bout de 3 secondes

// en respectant cet ordre
