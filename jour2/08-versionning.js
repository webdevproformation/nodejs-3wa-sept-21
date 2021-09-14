// install un package depuis npmjs.com

// dans le fichier package.json 
/**
 * 
 * "dependencies": {
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "cowsay": "^1.5.0",
    "jest": "^27.2.0"
  }
 */

  // symbole ^ 
  // chiffre en 3 parties : 4.17.21
  //                        Major.Minor.Patch

  // 3 => 4 => modification Majeur pour utiliser la librairie nouvelle manière de faire 
  // la librairie ne s'utilise plus de la manière 
  //    dans la version 4 de bootstrap => marge  ml-2  ---  mr-3
  //    dans la version 5 de bootstrap => marge  ms-2  ---  me-3

  // 16 => 17 => modification Minor pas modifier la manière d'utiliser la librairie 
  //     comment les fonctionnalités sont codée 

  function calcul(){ // modification majeure
    let i = (2 > j) ? "toto" : "tata"
  }

  // 20 => 21 => Patch => correction de bug / petite amélioration 

  // npm version 
  // npm version patch
  // npm version minor
  // npm version major

  // si vous allez update de vos librairies => forcé à tout recoder ou une partie  

  // est ce que tous les packages que j'ai sur mon projet son ajour et pas de trou de sécurité 

  // npm update
  // npm list
  // npm list --depth=1
  // supprimer le module lodash
  // npm un lodash // lodash@4.17.21

  // npm i lodash => installer la dernier version disponible

  // npm i lodash@4.0.0 => choisir la version 

  // npm outdated

  /*
  Package  Current   Wanted   Latest  Location             Depended by
  lodash     4.0.0  4.17.21  4.17.21  node_modules/lodash  jour2
  
  npm update

  ------------------- 

  npm un lodash

  npm i lodash@3.8.0
   npm outdated

   update majeur vers une autre majeur 
   la commande npm update ne fonctionne pas 

   npm i -g npm-check-updates => installer en global un utilitaire 

   ncu -u
   npm-check-updates -u

   npm i
  */ 
