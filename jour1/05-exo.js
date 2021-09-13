const tableau = ["lundi", "mardi", "mercredi"];

console.log("solution 1");

tableau.forEach( jour => {
    const jourCapital = jour[0].toUpperCase() + jour.slice(1);
    console.log(jourCapital);
} );

console.log("solution 2");

tableau.forEach( jour => {
    const jourCapital = jour.charAt(0).toUpperCase() + jour.slice(1);
    console.log(jourCapital);
} );

// pause café => 11h02 !! 
// https://github.com/webdevproformation/nodejs-3wa-sept-21

// modules 
// 06-module.js
