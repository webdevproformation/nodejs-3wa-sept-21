const ranger = () => {
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            console.log("la chambre est rangée");
            resolve();
        }, 3000)
    })
}
const nettoyer = () => {
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            console.log("la chambre est nettoyée");
            resolve();
        }, 2000)
    })
}

const manger = () => {
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            console.log("j'ai mangé");
            resolve();
        }, 1000)
    })
}
console.time("t")

manger().then( ()  => { console.timeLog("t"); return nettoyer() }  )
        .then( ()  => {  console.timeLog("t"); return ranger() } )
        .then( ( ) => { console.timeLog("t"); console.log("fin de actions")});

// 09-promesse-error.js 