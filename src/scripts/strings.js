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
