// en javascript ( navigateur )
// dès que vous créez une variable / une fonction => automatique est globale

// 06-module.html

// par défaut lorsque l'on crée un fichier .js pour être exécuté dans NodeJS 
// les variables sont locales au fichier 

const distance = 30 ;
const unite = "km";
const calcul = function(){
    console.log(`${distance} ${unite} `);
}

// la variable distance n'existe QUE dans la fichier 06-module.html

// dans l'environnement NodeJS les fichiers sont appelés des modules 

// si j'ai envi de partager des variables d'un module vers un autre ( d'un fichier vers un autre )

module.exports = {
    distance ,
    unite  ,
    calcul 
}; 
// explicitement dire quelle variable je veux partager vers les autres fichiers 
