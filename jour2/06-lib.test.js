const empty = require("./06-lib");
const { expect, test  } = require("@jest/globals");

// test unitaire 
test( "if var = '' return false" , function(){
    expect( empty("") ).toBe(false);
});

test( "if var = 0 return false" , function(){
    expect( empty(0) ).toBe(false);
});

test( "if var = [] return false" , function(){
    expect( empty([]) ).toBe(false);
});

test( "if var = [1] return true" , function(){
    expect( empty([1]) ).toBe(true);
});


// modifier le fichier package.json
// "test": "echo \"Error: no test specified\" && exit 1"
// "test": "jest"

// saisir la commande npm run test