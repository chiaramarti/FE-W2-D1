/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

document.write("We saw some datatypes: STRING, NUMBER, BOOLEAN<br>")
document.write("STRING: is a series of characters like 'Chiara' , and you have to write them with single or double quotes.<br>")
document.write("NUMBERS: all numbers are stored as decimal number, you can write them with or without decimals. Decimal numbers are at the right to the point.<br>")
document.write("BOOLEAN: boolean value can only be true or false, and it's often used in conditional testing.")

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Chiara"; 
console.log("This epicoder's name is: " + myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un' addizione (una somma) dei numeri 12 e 20.
*/
let x = 12;
let y = 20;
let sum = x + y;
console.log("12 + 20 = " + sum)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Martinelli"
console.log("This epicoder's surname is: " + myName + " (I'm using the same variable with different value)");

//CONST : it does not define a constant value. It defines a constant reference to a value.
//in teoria non dovrei usarlo ma non so come non fare bloccare il programma se no
try {
  const PI = 3.14;
  PI = 3;
}
catch (err) {
  console.log(err);
}
//lo metto alla fine normale



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let z = 4;

let sub = x - z;
console.log("12 - 4 = " + sub);

sub = z - x;
console.log("4 - 12 = " + sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "jhon";
let name2 = "Jhon";
let different = name1 != name2;
console.log("jhon e Jhon sono scritti diversamente: " + different)

name2 = name2.toLowerCase();
let equal = name1 === name2;
console.log("jhon e Jhon, senza considerare le maiuscole, sono uguali: " + equal)



// EXTRA
/*let farina = getElementById("farina_totale").value ;
let lievito = farina / 50 ;
let acqua = farina / 2 ; 

document.getElementById("farina").innerHTML = farina + "gr   ";
document.getElementById("acqua").innerHTML = acqua + "gr   ";
document.getElementById("lievito").innerHTML = lievito + "gr   ";*/

function getValueInput(){
  let farina = document.getElementById("farina_totale").value ;
  let lievito = farina / 50 ;
  let acqua = farina / 2 ; 
document.getElementById("farina").innerHTML = farina + " gr   di ";
document.getElementById("acqua").innerHTML = acqua + " gr   di ";
document.getElementById("lievito").innerHTML = lievito + " gr   di ";
}



//lo metto alla fine così non blocca cose importanti
const PI = 3.14
PI = 3
console.log(err)






