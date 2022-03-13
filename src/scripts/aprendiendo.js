// alert("Probando");

// let nombre = prompt("Como te llamas?");

// alert(`Hola ${nombre}`);


/*function changeTheme() {
	var x = document.getElementById("bttnTXT");
  if (x.innerHTML === "Dark Theme") {
    x.innerHTML = "Light Theme";
  } else {
    x.innerHTML = "Dark Theme";
  }
  
   var element = document.body;
   element.classList.toggle("light-mode");
}

function testing(){
  alert("Hurra!!!");
}*/


function dia(){
  let todayDate = new Date().getDate();
  document.getElementById("todayDate").innerHTML = todayDate + "th";
}


// let a = 5;
// let b = 15;
// let c = 200;

/* comparing logical conditionals (and, or, not)...
AND = && ; OR = || ; NOT = ! */

// if (!c<a){
// console.log("one of the values is true");
// } else {
// console.log("one of the value is false")
// }

// let insideArrayVar = 5;
// let arrayName = ["milk", "banana", "meat", "cookie", insideArrayVar];


/* Creating an Object in JS
the syntax is similar to a variable
but instead of adding a value
after the equal sign we type {} */

// var person = {
//   name: 'Tom',
//   age: 52,
//   gender: 'male',
//   hobbies:'Photography and Coding'
// };


/*CHALLANGE #1 
recieve 2 values (numbers)
then using an operator return
the result on the console */


// var num1 = prompt("Type your first number"); 
// var num2 = prompt("Type your second number");
// var suma = prompt("Type what mathematical operation you want to perform? sum, substract, multiply or divide");


// function calc(num1, num2, suma){
//  var num3 = Number(num1);
//  var num4 = Number(num2);
//   switch(suma){
//     case '+':
//     return console.log("Addition:" + (num3+num4));
//     case '-':
//     return console.log("Substraction:" + (num3-num4));
//     case '*':
//     return console.log("Multiplication:" + (num3*num4));
//     case '/':
//     return console.log("Division:" + (num3/num4));
//     default: return console.log("Operator is not valid");
//   }
// }

// calc(num1,num2,suma);


/* LOOPS

The WHILE Loops evaluates the condition first before running the code. ENTRY CONTROL LOOP.
the WHILE Loop runs the code while the condition returns true....REMEMBER to ALWAYS put inside the code an increment line otherwise it will become an infinite loop.

The DO Loops evaluates the condition at the end of running the code. EXIT CONTROL LOOP.
The DO Loop runs the code and then checks the condition, then it runs the code again and checks the condition again.

The FOR Loop is similar to the WHILE loop, but it's syntax is shorter.
SYNTAX: for(variable,condition,increment){code to execute} */


// let a = 1;

// while(a<=10){
//   if(a%2!==0){
//   console.log(a);}
//   a++;
// }
 
for(let a=1;a<=10;a++){
  if(a%2!==0){
    console.log(a);}
}

/* ARRAYS
collection of elements of the same type */

let arr = [23,45,67,89,12];
// to access a particular value use the INDEX value i.e. cosole.log(arr[n]);
// being `n` the value of the INDEX
console.log("Dealing with ARRAYS");
// to print ALL the values of the array we can use
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}