// suite comprendre les modules nodejs
// déclencher une erreur lors de l'exécution

// (function (exports, require, module, __filename, __dirname) {
    //var ;
// })

//console.log(exports); //  { } objet vide => permettre d'envoyer des variables => autre module
//console.log(require); //  [Function: require]
//console.log(module); // {  } => objet des informations sur l'exécution de votre script 
                    // contient une référence vers exports (précédent)
//console.log(__filename); // constante créée par nodejs chemin absolu du fichier js exécuté
                         // C:\Users\HP\Desktop\node\jour1\08-module.js
//console.log(__dirname); // constante créée par nodejs chemin absolu du dossier où est exécuté le fichier 
                        // js exécuté  

const couleur = "#000";

// module.exports = couleur

exports.couleur = couleur ;  // syntaxe courte


exports.calcul = function(){
    console.log("je suis un calcul");
}

const jours = ["lundi", "mardi", "mercredi"];
exports.jours = jours;

exports.note = [1,3,4,20]; // syntaxe super courte 
console.log(module);