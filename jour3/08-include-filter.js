let tableau1 = ["bonjour", "les", "amis"];

// est ce que tableau contient le texte bonjour ??

console.log(tableau1.includes("bonjour"))  // true
console.log(tableau1.includes("toto"))  // false

let articles = [ 
    {id : 1 , titre : "article 1" , prix: 10 , location : ["fr" , "en" ]},
    {id : 2 , titre : "article 2" , prix : 30 , location : ["en" ]},
    {id : 3 , titre : "article 3" , prix : 15 , location : ["fr" , "en", "bl" ]},
]

// prendre ton tableau ET créer un nouveau tableau filtrer le tableau en fonction d'un critère
// récupérer les articles sont le prix est > 12 

const articleSup12 = articles.filter( function( item ){
    // returner un boolean / un test
    return item.prix >= 12
} )
console.log(articleSup12);
// tous les produits vendus en france ?? fr 

const articleFr = articles.filter(function(item){
    return item.location.includes("fr")
})
console.log(articleFr);

