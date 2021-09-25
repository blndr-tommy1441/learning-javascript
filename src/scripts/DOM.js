//DOM = Document Object Model
// this treats the website as an object, thus converting the whole site into a tree where the root of the object is the DOCUMENT
// so to access it's properties/tags/elements we use the `.` Dot notation
// SYNTAX: document."element" refer to https://www.w3schools.com/js/js_htmldom_document.asp to see the uses



console.log(document);

console.log(document.getElementsByClassName(`first`));
console.log(document.getElementById(`second`));

// once we have referenced the TAG/ID/CLASS
// we can now change/manipulate the content

document.getElementById(`third`).innerText="Text changed with JS";