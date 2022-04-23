// The use of the double equal sign is for when we want to compare the values regardless of the type (number or string)
let a = 10;
let b = 20;
let c = "10"
//returns FALSE because the VALUE is not the same even though the TYPE is the same.
console.log(a==b);
//returns TRUE because the VALUE is the same even though the TYPE are not the same.
console.log(a==c);


// The use of the triple equal sign is for comparing values and types, if either are different, it returns FALSE.
let x = 10;
let y = "10";
let z = 10;
// returns FALSE as they are not the same type even though the value is the same
console.log(x===y);
//returns TRUE because they are both the same type and value
console.log(x===z);