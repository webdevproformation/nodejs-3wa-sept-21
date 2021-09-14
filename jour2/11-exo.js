// 11-exo.js
// npm i -g standard
// standard --version
// standard .\11-exo.js => pas conforme
// stardard --fix .\11-exo.js
// Intégration Continue => avant publication sur votre compte github => nettoyage du code 

function empty (variable) {
  const reponse = true
  if (typeof (variable) === 'string' && variable.length === 0) {
    return false
  }
  if (typeof (variable) === 'number' && variable === 0) {
    return false
  }
  if (Array.isArray(variable) && variable.length === 0) {
    return false
  }
  return reponse
}

module.exports = empty

// 
/*
1 créer une nouveau fichier json : 12.portfolio.json qui va contenir 4 items
- dans chaque item : id | url | titre | prix (le contenu est à votre convenance)

2 créer une nouveau fichier json : 12.articles.json qui va contenir 3 items
- dans chaque item : id | titre | contenu | categories (le contenu est à votre convenance)

- vous pouvez vérifier que vos fichiers json sont conformes via le site internet suivant : https://jsonchecker.com/

3 créer un serveur (module http) via un fichier 12-exo.js 
- si vous appelez l'adresse http://localhost:3333/ => retourner le fichier 12.portfolio.json
- si vous appelez l'adresse http://localhost:3333/posts => retourner le fichier 12.articles.json
- si vous appelez l'adresse http://localhost:3333/all => retourner le fichier 12.articles.json et le fichier 12.portfolio.json
fusion des réponses => lodash (merge)

Back Office web ! 
API => librairie express // piocher des données dans une base NoSQL (MongoDB)

*/ 
