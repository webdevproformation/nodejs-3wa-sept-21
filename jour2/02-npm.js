// 02-npm.js

// 1er type  module => écrire nous même require // module.exports

// 2ème type de module => module natif (livré avec NodeJS) http

// 3ème et denier type de module => créé par la communauté 
// NPM => Node Package Manager 
// NPM outil en ligne de commande qui permet de télécharger des packages / modules qui sont créés par la comunauté 

// télécharger et les utiliser facilement => outil qui permet de télécharger et utiliser ces modules 

// télécharger il faut que ce package / module soit disponible sur internet 
// dépôt => serveur de stockage des librairies 

// npmjs.com => https://www.npmjs.com/
// moteur de recherche => saisir le nom du module que vous souhaitez installer 
// ajouter à votre projet 
// lodash

// https://www.npmjs.com/package/lodash 
// page officiel de présentation de la librairie lodash 
// qui vous donne des indications sur la librairie 
// version 
// comment installer la librairie => npm i lodash 
// nombre de téléchargement par semaine
// lien vers une documentation => site internet dédié expliquer comment ça fonctionne
// lien vers un dépôt github => pour les petites librairies vous allez trouver une présention / mode d'emploi de la librairie
// exemple d'utilisation d'utilisation à gauche 

// lodash => librairie utilitaire => donner des fonctionnalités qui n'existe par défaut en javascript 
// donne manque sur javascript 
// undescore 

// télécharger et utiliser une librairie via npm 
// créer un fichier package.json 
// commande qui permet de le créer automatiquement
// npm init
// texte => explique ce vous allez faire 
// questions ?? npm help init
// après avoir finit d'exécuter cette commande => 
// npm install <pkg> => package => nom d'un package 
// package name: (jour2) => decouverte-npm Enter 
// version (1.0.0) : Enter
// description : formation 3WA découverte de nodejs
// entry point (00-questions.js) : (plus tard / script)  Enter 
// test command permet de mettre des commandes pour réaliser des tests (test untaire)  (plus tard / script) Enter 
// git repository : https://github.com/webdevproformation/nodejs-3wa-sept-21 Enter
// keywords (publier les fichiers de notre projet sur npmjs.com) : formation node découverte npm
// author: Malik H
// licence : Enter

// synthèse du fichier package.json qui va créer 
// Enter 
// le fichier est généré 

// fichier package.json est un fichier que l'on peut modifier à la main 
// mais aussi via des commandes qui va modifier le fichier 

// rdv 11h26 @ toute et bon café !!! 

// npm init => pause des questions => génére le fichier package.json

// rôles de ce fichier  :
// 1 donner de informations sur votre projet : qui / documentation / version / dépôt github
// 2 dépendances de votre projet ( obligatoire / facultative )
// 3 créer des alias scripts => que l'on pourra utiliser dans le terminal 


// installer une librairie => lodash que je pourrai utiliser dans mon projet 
// npm i lodash
// npm install lodash

// barre de progression qui apparait => télécharger le package 
// une fois fini => info 
// added 1 package, and audited 2 packages in 6s
// found 0 vulnerabilities npmjs.com mis en place un système d'audit des fichiers sources 
// vérifier ?? vulnérabilités => trouvé des manières d'utiliser la librairie pour rendre 
// votre projet attaquable 

// dossier jour2 => 
// modifications :
// 1 modifie le fichier package.json 
// ajoute une nouvelle valeur dans le fichier 
/*
  "dependencies": { // dépendant projet fonctionne il faut OBLIGATOIREMENT QUE lodash 4.17.21 soit installé
    "lodash": "^4.17.21" //  4.17.21 +  symbole ^ * [ ] versionning sémantique
  }
*/

// 2 package-lock.json => complément du fichier package.json
// donner des informations précises sur le téléchargement
// donner l'adresse exacte où la source a été télécharger + integrity
// token / hash permet de garantir que les fichiers télécharger sont indentiques à ceux sur le serveur (dépot npmjs.com) ils fichiers télécharger sont identiques 

// 3 nouveau dossier qui a été créé => dossier node_modules
// un ou plusieurs dossiers : ici 1 seul dossier lodash
//  plusieurs fichiers .js 
//  et un fichier package.json
// informations sur la libraire que vous venez de télécharger 

// utiliser cette librairie 
// 03-exemple-lodash.js
