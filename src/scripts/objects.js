console.log("javascript working");

let camera=
    {
        name: "Canon",
        model: "350D",
        price: "400$"
    }

// Accessing static property use the `.` dot notation

console.log(camera.name);
console.log(camera.model);

// Accessing dynamic property use the [var name]

let p = "price";

console.log(camera[p]);

// To add a property to an object from outside

camera.colour = "black";
console.log(camera);


// When there are several objects rather than typing each block of the object asigning the names, it's easier to place the properties of the objects inside an array.
//for example if there are several camera objects rather than creating camera1, camera2, camera3...camera(n) with their ow properties, we can place them inside a property

let cameras = [
    {
        name: "Canon",
        model: "350D",
        price: "400$"
    },
    {
        name: "Nikon",
        model: "F1",
        price: "600$"
    },
    {
        name: "Minolta",
        model: "MD123",
        price: "100$"
    }
]


console.log(cameras);

// so now we can access any of the properties of the objects in the array, simply by typing objectName[IndexNumber].Property 

console.log(cameras[1].name);

//even better, we can now use loops to the objects

for(let i=0;i<cameras.length;i++){
    console.log(cameras[i].name, cameras[i].price);
  }