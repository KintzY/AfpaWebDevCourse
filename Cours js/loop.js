// CONTROLE DE FLUX (flow control)

// Boucle TANT QUE...FAIRE (while loop)
console.log("Boucle WHILE");
let count = 10;

while (count < 10) {
    console.log('   LOOP count is:' + count);
    count += 2;
}
console.log('   EXIT LOOP count is:' + count);


// Boucle FAIRE...TANT QUE (do...while loop)
console.log("Boucle DO WHILE");
let number = 5;
do {
    number++;
    console.log('   LOOP number is:' + number);
} while (number < 5);
console.log('   EXIT LOOP number is:' + number);


// Itération REPETER POUR...DE...A (for iteration)
console.log("Boucle FOR FROM TO ");
for (let counter = 1 /* déclaration et initialisation de la variable de comptage*/; counter < 5 /* valeur limite 'TO' de la variable de comptage */; counter++ /* gestion de la variablre de comptage à chaque tour */) { // Boucle avec incément de 1 à chaque tour
    console.log('Inside the loop:' + counter);
}
console.log('Outside the loop:' + counter); // Erreur si déclaration 'let'