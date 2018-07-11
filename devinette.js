/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");


// TODO : complétez le programme



// si le num du prompt est inf à la solution: afficher "trop petit"
// si le num du prompt est sup à la solution: afficher "gagner"

var essai = 6;

do {

 var number = prompt("Choississez un numéro entre 1 et 100. essai: " + essai);

    if (number < solution) {
        alert("trop petit");
    }
    else if (number > solution) {
        alert("trop grand");
    }

    else if (number == solution) {
        alert("gagné");
    }

    
    essai--
if (essai == 0) {
    alert("perdu");
}

   
} while (essai > 0);

