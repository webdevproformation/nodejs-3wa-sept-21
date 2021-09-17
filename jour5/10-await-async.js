//09-promesse-error.js
const adresse = "http://localhost:1234";
// 1 connecter le serveur
const connexion = function(){
    return new Promise((resolve , reject) => {
        if( adresse == "http://localhost:1234" ){
            console.log( "connexion au serveur réussie")
            resolve();
        } else {
            reject("erreur au moment de la connexion au serveur")
        }
    });
}

// 2 préparer l'email
const createEmail = function(){
    return new Promise((resolve , reject) => {
        const modele = "fichier";
        if( modele ){
            console.log( "le mail est créé")
            resolve();
        } else {
            reject("erreur lors de la création de l'email")
        }
    });
}

// 3 mail envoyé 
const envoiEmail = function(){
    return new Promise((resolve , reject) => {
        const serveurMail = true ;
        if( serveurMail ){
            console.log( "le mail est envoyé")
            resolve();
        } else {
            reject("erreur lors de l'émission de l'email")
        }
    });
}
// Promise permettent d'attendre d'une promesse soit finie avant de passer à la suivante 
// Promise permet de bloquer l'exécution si une Promesse 

const i = "bonjour";
// connexion().then()

// await is only valid in async function
async function emissionEmail(){
    await connexion(); 
    await createEmail();
    await envoiEmail();
    // écrire de l'asynchrone comme du synchrone 
    // le code va être exécuté dans l'ordre dans lequel vous l'avez écrit 
}
// await async dans des fonctions fléchées

const emissionEmail2 = async () => {
    await connexion(); 
    await createEmail();
    await envoiEmail();
}
async function mailing(){
    console.log("premier mail")
    await emissionEmail();
    console.log("deuxième mail")
    await emissionEmail2();
}
mailing();
// rdv 16h18 @ toute suite !! 
 
setTimeout( () => {
    console.log(i)
} , 2000);

// 10-await-async.js