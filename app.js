
// var tommyBird = new Object(); {
//     tommyBird.age=38;
//     tommyBird.color= "white";
//     tommyBird.likes= ["food","sun"];
//     tommyBird.birthday= { "month": 7, "day": 17, year: 1983 }
// };

// function describeBird(bird) {
//     console.log("This bird is " + bird.age + " years old with " + bird.color + " feathers.");
// }

// describeBird(tommyBird);





// //The constuctor function 

// function Movie (title, year, genre, cast) {
//     this.title= title;
//     this.year=year;
//     this.genre= genre;
//     this.cast= [cast];
// }


// //A method of the object

// Movie.prototype.read=function() {
//     document.write("Title" + this.title + "Year " + this.year + "Genre " + this.genre + "Actors: " + this.cast)
// }



// //Instantiating a new object

// var movie1= new Movie ("The Color Purple", 1982, "Drama", ["whoopi", "oprah"]);
// movie1.read();





// //The constuctor function 

// function Car (title, year, make, model) {
//     this.title= title;
//     this.year=year;
//     this.make= make;
//     this.model= model;
// }


// //A method of the object

// Car.prototype.display=function() {
// var place=document.getElementById("Submit");
// place.innerHTML="Title" + this.title + "Year " + this.year + "Make " + this.make + "Model " + this.model

   
//     console.log("Title" + this.title + "Year " + this.year + "Make " + this.make + "Model " + this.model)
// }



// //Instantiating a new object

// var car1= new Car ("Tesla", 2018, "Tesla", "ModelS");
// // car1.display();


//car one

var tesla = {
    title: "Tesla",
    make: "Tesla",
    year: 2018,
    model: "ModelS",
    description: "Electric car, save money on gas, charge car, auto-pilot, white, black"
}

//create a method

function display () {
var submit=document.getElementById("chicken");

for (value in tesla)
submit.innerHTML= tesla.title + "<br>" + tesla.year + "<br>" + tesla.make +"<br>" + tesla.model + "<br>" + tesla.description

}

//car two jeep


var Jeep = {
    title: "Jeep",
    make: "Cherokee",
    year: 2020,
    model: "Model7",
    description: "latest and newest, white, black"
}

//create a method

function display () {
var place=document.getElementById("lemon");

for (value in Jeep)
place.innerHTML= Jeep.title + "<br>" + Jeep.year + "<br>" + Jeep.make +"<br>" + Jeep.model + "<br>" + Jeep.description

}

// car three

var benz = {
    title: "Mercedes Benz",
    make: "Benz",
    year: 2020,
    model: "S7",
    description: "latest and newest, white, black"
}

//create a method

function display () {
var place=document.getElementById("pepper");

for (value in benz)
place.innerHTML= benz.title + "<br>" + benz.year + "<br>" + benz.make +"<br>" + benz.model + "<br>" + benz.description

}












//clear button 

function clear1(){
    var myobj = document.getElementById("clear1");
    myobj.remove();

 }
 function clear2(){
    var myobj2 = document.getElementById("clear2");
    myobj2.remove();

 }
 function clear3(){
    var myobj3 = document.getElementById("clear3");

     myobj3.remove();

 }
