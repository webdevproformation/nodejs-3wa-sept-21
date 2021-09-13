// Node ou NodeJS ou node.js => équivalent

// technologie qui a été créée 2009 par Ryan Dahl

// node n'est pas langage 
// n'est pas un framework 

// => NODE c'est un ENVIRONNEMENT d'exécution de javascript 
// Runtime 

// grâce à node js il est possible d'exécuter du javascript HORS d'un navigateur web ( Firefox / Chrome / Edge / Safari .... )

// mac / linux / windows 

// nodejs est très souvent utilisée pour créer des API => back office pour application web 

// application web peut être découpée en 2 parties :

// front => client ( React / Angular / Vue.js  )
// UI User Interface qui va interroger un back Office 
// Back Office ( serveur ) => NodeJS pour le créer !!!


// Back Office ( serveur ) :
// réaliser des opérations comme le stockage en base de données 
// envoyer des emails 
// vérifier que la personne est bien authentifié pour accéder à une ressource

// nodejs pour pouvoir faire une application il fallait maitriser plusieurs langages
// Avant 2009
// langage client (HTML / CSS / javascript)
// langage serveur (PHP / SQL ) Python / C++ / Java 

// A partir de 2009
// langage client (HTML / CSS / javascript)
// langage serveur ( javascript )

// 1 seul langage pour le front et le back 

// javascript et nodejs énorme communauté => facile de trouver des librairies 
// facile de trouver de la documentation sur internet apprendre / comprendre quelque chose de nouveau 

// Comment fonctionne NodeJS 

// navigateur => c'est le moteur javascript 
// firefox : SpiderMonkey - 
// Chrome : V8

// transformer du javascript en binaire (code compréhensible par le processeur de l'ordinateur )

console.log("bonjour les amis");  // SpiderMonkey => binaire 

// Ryan Dahl => récupérer un moteur javascript open source  V8 le moteur de chrome 

// codé un programme en C++ => NodeJS 

// étant donné que l'on n'est plus dans l'environnement d'un navigateur 
// pas exactement le même javascript que celui présent dans les navigateur 

// API DOM => accéder aux balises html n'est pas disponible dans Nodejs 

document.getElementById("introduction") // NodeJS ne le comprend pas ????? 

// par contre vous allez avoir des fonctionnalités / mots clés nouveau lorsque l'on code sur NodeJS 
require(); // présent dans NodeJS absent dans le monde des navigateurs 

// librairies intégrées dans NodeJS qui permettent de réaliser dans actions IMPOSSIBLE dans les navigateurs 

// créer des fichiers est possible  => fs (FileSystem)
// écouter un processus sur le precesseur => possible => process 

// il faut au préalable l'installer 



