// explicitement dire quelle variable je veux importer (utiliser dans mon script)
const lib = require("./06-module");
const { b , etudiant } = require("./06-lib"); // destructuration des variables envoyées depuis le module


console.log(lib.unite);
lib.calcul();
console.log(b);
console.log(etudiant.nom);
etudiant.description();

// erreur => ligne 1
// colonne où est située l'erreur console.log(distance);

// message d'erreur ReferenceError: distance is not defined
// stack d'exécution : la pile d'exécution 
// l'ensemble des fichiers / des fonctions qui ont été exécuté par nodejs pour exécuter votre fichier .js 

/*
cas pratique : 


    1 Créer un fichier 07-librairie.js contenant deux fonctions
    une fonction addition avec deux arguments a et b retournant la somme de a plus b
    une fonction multiplication avec deux arguments a et b retournant la multiplication de a plus b
    Ces deux fonctions doivent être exportées

    2 Créer un fichier 07-calcul.js important les deux fonctions de 07-librairie.js
    Réaliser les calculs suivants en utilisant les fonctions et les afficher dans la console:

    2 + 53
    12,4 x 33
    -2 x 24,65


*/ 