//09-promesse-error.js
const adresse = "http://localhost:124"
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
        const serveurMail = false ;
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
connexion().then( () => { return createEmail() } )
           .then( () => { return envoiEmail( )})
           .catch( (messageErreur) => { console.log( messageErreur)} );


setTimeout( () => {
    console.log(i)
} , 2000);