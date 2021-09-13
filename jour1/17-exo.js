const { writeFile , appendFile , readFile } = require("fs");

writeFile("17-index.html" , "je viens de créer un fichier avec nodeJS" , function(error , fichier){
    console.log("le fichier est bien créé \n");
});

// appendFile() si le fichier existe => ajouter le texte à la fin du fichier existant
// appendFile() si le fichier n'existe pas => créer le fichier et ajoute le texte de dans 

appendFile("17-index2.html", "je viens de créer un fichier avec nodeJS 2" , function(){
    console.log("le fichier est bien créé avec appendFile \n")
    readFile("17-index2.html", "utf8" ,function(error, file){
        console.log(file);
    })
})

// node 17-exo.js