console.log("Hello Tommy!");

let firstName = "Thomas";
console.log(firstName);

let surname = 'Helmn';
console.log(surname);

console.log(firstName + " " + surname);




// ESCAPING CHARACTER

/* To escape any special character i.e. the single quote or the double quotes, we use a backslash BEFORE each character, or mix quotes
*/

/*
ERROR
let char1 = "string of character "without" using the escaped character"
NOTE: the above throws an error as there's two sets of double quotes
*/

// correct way number 1
let char2 = "Correct way number 1 to \"escape\" a character";
console.log(char2);

// correct way number 2 (mixing quotes)
let char3 = "Correct way number 2 to 'escape' a character";
console.log(char3);

// correct way number 3 (mixing quotes)
let char4 = 'Correct way number 3 to "escape" a character';
console.log(char4);


let char5 = "I am learning: \nJavascript";
console.log(char5);


// CONCATENATE STRINGS
let primeraParte = "This is the first part of a string of chatacters, ";
let segundaParte = "now this is the second part";
console.log(primeraParte += segundaParte);


// FIND OUT LENGTH OF STRINGS
let leng1 = "numero";
let leng2 = " agregue un espacio";
const leng3 = leng1 + leng2;

console.log(leng1.length);
console.log(leng3.length);
