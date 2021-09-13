const vehicule = {
    anneeAchat   :  2019 ,
    proprietaire : "Alain" ,
    achat : function(){
        const anneeEncours = (new Date()).getFullYear();
        console.log(this);
        return anneeEncours - this.anneeAchat; 
    }
}

module.exports = vehicule; 
