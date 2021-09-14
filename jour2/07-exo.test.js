
const { expect } = require("@jest/globals");
const palindrome = require("./07-exo");

test("lol est true", function(){
    expect( palindrome("lol") ).toBe(true)
});
test("kayak est true", function(){
    expect( palindrome("kayak") ).toBe(true)
});
test("Laval est true", function(){
    expect( palindrome("Laval") ).toBe(true)
});

test("bonjour est false", function(){
    expect( palindrome("bonjour") ).toBe(false)
});
test("hello est false", function(){
    expect( palindrome("hello") ).toBe(false)
});

test("salut est false", function(){
    expect( palindrome("salut") ).toBe(false)
});

// npm run test 07-exo.test.js
// La vie  

// créer ta fonction vérification QUE sur certain cas 
// cas limite auquel tu n' as pas pensé 
// permettent de vérifier les fonctions même dans des cas limites => pas générer de résultat inattendu 
// javascript falsy => "" => false  // concaténation 

// test end 2 end 
// test e2e => humain 

// fonctionnalité => ensemble de fonction
// lorsque je clique sur le bouton envoyer d'une formulaire 
// email envoyé
// base de données une nouvelle ligne ajoutée dans table commentaire 

// mocha 
// protractor

// vérifier anticiper tous les cas 
// si demain fait evoluer ton code 
// verification que tes ajouts n'ont casé certain comportement 