
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


var tesla = {
    title: "Tesla",
    make: "Tesla",
    year: 2018,
    model: "ModelS"
}

//create a method

function display () {
var place=document.getElementById("submit");

for (value in tesla)
place.innerHTML="Title" + tesla.title + "<br>" + "Year " + tesla.year + "<br>" + "Make " + tesla.make +"<br>" +  "Model " + tesla.model

}