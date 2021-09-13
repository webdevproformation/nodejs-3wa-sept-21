// closure ??
function serveur(){
    const ip = "1.2.3.4";
    return function() { 
        console.log(ip);
    }
}

// closure => rappel spécial plus tard sur ce concept de javascript 

module.exports = serveur  ;

// 09-main.js