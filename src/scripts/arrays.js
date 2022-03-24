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