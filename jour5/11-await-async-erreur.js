// 11-await-async-erreur.js

// faire un calcul 

// recuperer des chiffres 

const getNumber = function(a, b){
    return new Promise( (resolve ,reject) => {
        setTimeout( () => {
            if(typeof(a) == "number" && typeof(b) == "number"){
                resolve([a, b])
            } else {
                reject("veuillez founir des chiffres correctes")
            }
        } , 1000)
    })
}
// effectuer le calcul
const calcul = function(data){
    return new Promise( (resolve ,reject) => {
        setTimeout( () => {
            if(Array.isArray(data)){
                const resultat = data[0] + data[1]
                resolve(resultat)
            } else {
                reject("les données doivent être mises dans un tableau")
            }
        } , 2000)
    })
}

const calculer = async () => {
    try{ // .catch()
        console.log("number")
        const data = await getNumber ( "deux", 10); // then()
        console.log("calcul")
        const resultat = await calcul(data); // then()
        console.log( resultat);
    }catch(message){
        console.log(message) // .catch()
    }
}
calculer();
console.log("après calcul");

//   rxJS ??? Promesse / await async / callback 
//   Angular js => design pattern Observable // observer / observable // abonnée 
// programmation asynchrone plus avancée => https://rxjs.dev/api

// 12-api.js 