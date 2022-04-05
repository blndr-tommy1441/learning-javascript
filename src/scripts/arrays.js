// ARRAYS
// Syntax let arrayName = [0, 1, 2, 3, n];
// each element inside the square brackets are items in the array and are calle using INDEX
// array  => [2314, 4523, 567, "string"]
// index  =>   0      1    2       3

let arrayName = [12, 234, "string", 345];
console.log(arrayName[1]);

// ARRAYS can be nested
// let nestedArray = [["string", 324234, 45352], [3424, 545, 2323]];
// array  =>         [["string", 324234, 45352], [3424, 545, 2323]]
// index  =>                       0                    1
// internal index =>       0        1      2        0    1     2
// access internal index => console.log(nestedArray[[0][2]]);

let nestedArray = [["string", 324234, 45352], [3424, 545, 2323]];
console.log(nestedArray[1][1]);

// Adding to an Array...Things to remember
// The value will always be added to the end of the array

let seassons;
seassons = ["Winter", "Spring", "Summer"];
console.log(seassons);

seassons.push("Fall");
console.log(seassons);


// Remove from an Array...Things to remember
// The value will always be removed from the end of the array

let seasson;
seasson = seassons;
console.log(seasson);

seasson.pop();
console.log(seasson);

// the advantage is that we can assign the removed value in a variable
let removedValue = seasson.pop();
console.log(removedValue);

// Use splice(arrayIndex, number of elements to remove) to remove arbitrary item.
// Use shift() to remove from beginning.
// Use pop() to remove from end.

// TEST
let testArray = ["a", "b", "c", "d"];
console.log(testArray);
testArray.push("e");
console.log(testArray);
// here we remove the second element of the array (index number 1)
// and the amount of elements removed (this case 1 element)
testArray.splice(1, 1);
console.log(testArray);
