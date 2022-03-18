/*Eseguite questi programmi con il ciclo while
Snack1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a 
inserirli nell’array fino a quando la somma degli elementi è minore di 50.

Snack2
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
Ogni volta che ne crei uno, stampalo.
Snack3
Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
Snack4 (Bonus)
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o 
no alla festa. Interrompi il ciclo appena il nome è stato trovato.*/

let array = [];
console.log(array);

// creo la variabile somma vuota a zero
let somma = 0;
console.log(somma);

// ciclo while che funziona fino a che somma è inferiore a 50
while (somma < 50) {

    // prompt per chiedere a utente di inserire numero
    let numeroUtente = parseInt(prompt("inserisci un numero"));
    console.log(numeroUtente);

    // aggiungo il numero chiesto nell array vuoto
    array.push(numeroUtente);
    console.log(array);

    // sommo tutti i numeri chiesti fino a che non supera il 50
    somma += numeroUtente;

}

// stampa del valore finale
console.log(somma);