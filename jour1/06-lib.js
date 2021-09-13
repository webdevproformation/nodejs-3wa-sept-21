const b = 35;

const etudiant = {
    nom : "Alain",
    age : 22,
    description : function(){
        console.log(`je suis ${this.nom} et j'ai ${this.age}`)
    }
}

module.exports = {
    b, etudiant
}