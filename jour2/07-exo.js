const palindrome = ( mot ) => {
    mot = mot.toLowerCase();
    const motInverse = mot.split("").reverse().join("");
    // mettre mot => ["b","o","n","j","o","u","r"] 
    // inverse mot => ruojnob 
    if(mot == motInverse){
        return true;
    }
    return false ;
}

function addition(a, b){
    if(typeof(a) == "number" && typeof(b) == "number"){
        return a + b ; 
    }
    throw new Error("erreur");
    // 1 2 =>  3
    // "1" 2 => "12"
}

module.exports = palindrome;