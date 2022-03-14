// Gets a value from the user
var numero = prompt("Type in a number:");

// Assigns the input value to a variable that gets used later
var newNumber = numero;

// It writes inside the SPAN with ID value the initial number
document.getElementById("value").innerHTML = newNumber;

// It adds one to the initial value stored inside the variable NUMERO
newNumber++;

// It writes inside the SPAN with ID value the new number
document.getElementById("value2").innerHTML = newNumber;

// It substracts one to the initial value stored inside the variable NEWNUMBER
numero--;

// It writes inside the SPAN with ID value the new number
document.getElementById("value3").innerHTML = numero;

/* It creates a global variable "X" and gets the element by the ID of num and returns 
function myFunction() {
  x = document.getElementById("num").value;
  // console.log(x);
  return x;
  }
  
  let z = myFunction();
  console.log(z);*/



// get the button **ELEMENT** from the page and save it
const button = document.getElementById("bttn") 

function myFunction(){
  const numInput = document.getElementById("num").value;
  // console.log(numInput.value)
  return numInput
}

// have the button listen to a click, then do something
// for us
button.addEventListener("click", function(){
  const number = myFunction()

  console.log(number)
  document.getElementById("value4").innerHTML = number;
  
  let suma = myFunction();
  suma1 = parseInt(suma, 10);
  suma1 += 3;
  document.getElementById("value5").innerHTML = suma1;
  
  let subs = myFunction();
  subs -= 3;
  // console.log(subs);
  document.getElementById("value6").innerHTML = subs;
  
  let multi = myFunction();
  multi *= 3;
  // console.log(multi);
  document.getElementById("value7").innerHTML = multi;
  
  let divi = myFunction();
  divi /= 3;
  divi1 = divi.toFixed(2);
  // console.log(divi1);
  document.getElementById("value8").innerHTML = divi1;
}
);