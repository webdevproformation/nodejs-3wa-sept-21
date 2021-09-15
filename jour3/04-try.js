
const before = "avant";
try{
    calcul();
}catch(error){
    console.log(error);
    // throw new Error(error); // créer un erreur qui stop l'exécution du code 
}

console.log(before);