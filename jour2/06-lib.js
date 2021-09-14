// fonction doit me retourner false 
// variable = "" => false
// variable = 0 => false
// variable = [] => false 
// sinon true

function empty(variable){
    let reponse = true ;
    if(typeof(variable) == "string" && variable.length == 0){
        return false;
    }
    if(typeof(variable) == "number" && variable === 0){
        return false;
    }
    if(Array.isArray(variable) && variable.length === 0){
        return false;
    }
    return reponse;
}

module.exports = empty ;
// 06-lib.test.js