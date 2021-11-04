// This is an example of the use of the double equal sign
let a = 10;
let b = 20;
let c = "10"
//returns FALSE because the value is not the same even though the type is the same
console.log(a==b);
//returns TRUE because the value is the same even though the type is not
console.log(a==c);
// This is an example of the use of the triple equal sign
let x = 10;
let y = "10";
let z = 10;
// returns FALSE as they are not the same type even though the value is the same
console.log(x===y);
//returns TRUE because they are both the same type and value
console.log(x===z);