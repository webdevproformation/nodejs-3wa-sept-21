// 12-this-callback.js

const voiture = {
    marque : "Renault",
    information : function(){
        console.log(this.marque);
    },
    information2 : function(){
        setTimeout( function(){
            console.log(this.marque); 
        } , 1000);
    },
    information2Solution1 : function(){
        const that = this; // stocker la valeur de this dans une variable 
        setTimeout( function(){
            console.log(that.marque); // et l'utiliser dans la fonction de rappel
        } , 2000);
    },
    information2Solution2 : function(){
        setTimeout( function(){ // bind sur le callback => pas de perte de contexte
            console.log(this.marque); 
        }.bind(this) , 3000);
    },
    information2Solution3 : function(){
        setTimeout( () => {  // utiliser une fonction fléchée qui évite de créer un nouveau contexte
            console.log(this.marque); 
        } , 4000);
    }
}
voiture.information(); // Renault
voiture.information2(); // undefined
voiture.information2Solution1(); // Renault
voiture.information2Solution2(); // Renault
voiture.information2Solution3(); // Renault

// la valeur stockée dans this dépend de son contexte d'exécution 

