// While loop
function Call_Loop() {
    var X = 0;
    var Y = " ";
    while (X <= 51) {   // while X is less than 51
        Y += '\xA0' + X;  // adds and assigns a line break and value of X
        X = X + 10; // count from 0 in intervals of 5
    } 
    document.getElementById("Loop").innerHTML = Y;  // element displays value of Y
}   

// String method
function your_Name() {
    var You = document.getElementById("Name").value; // variable given input "Name" as value
    document.getElementById("ina_String").innerHTML = You.length;   //returns the length of string of value given
}

// For loop
function plant_List() { //defines function
var Plant = ["Pothos", "Bird of Paradise", "Snake Plant", "Monstera", "Angel Wing", "Philodendron"];    //variable is defined by and array
var List = "";
var P;     // variable representing postion of element in array
    for (P = 0; P < Plant.length; P++) {    // P is defined as 0 first item in array, if P is < total of elements in array, then P = next item in array
        if (P <= 4) {  // if P less than or equal to positon 4
            List += Plant[P] + ",\xA0"; //display element by index defined by P
        }
        else {  // if P <= 4 is not true 
            List += Plant[P] + "."; // then display element in position 5
        }
    }
    document.getElementById("List_of_Plants").innerHTML = List; //element targetted will display List
}

// Array Function
function my_Favorite() {    //defines funtion
    var Krystle = [];   // defines variable as position in array
    Krystle [0] = "snowboard.";         
    Krystle [1] = "ride motorcycles.";
    Krystle [2] = "play with her dog's.";
    Krystle [3] = "go to the river.";
    document.getElementById("to_Do").innerHTML =  // element targetted to display
    "One of Krystle's favorite things to do is " + Krystle[3];  // variable Krystle with the value of position 3
}

// Constant function
function constant_Function() {  //defines function
    const Motorcycle = {company: "Harley Davidson", model: "Street Glide", color: "blue"};  //create constant object with properties
    Motorcycle.color = "red";   //changes a property
    Motorcycle.price = "$18,799";   //adds a property
    document.getElementById("Constant").innerHTML = "You can buy this " + Motorcycle.color + " " + Motorcycle.model + " from " +
    Motorcycle.company + " for " + Motorcycle.price + ".";  //targetted element displays string value
}

// Let function
function let_Key() {    //defines function
    let X = 10;     //defines X with a value of 10
    document.getElementById("Key_Word").innerHTML = (5 + X);    //targetted element displays value of 5 + X
}

// Return statement
function my_Fun() {
    var X = re_Turn("I love ","sushi!");
    function re_Turn(a,b) {
        return a + b
    }
    document.getElementById("state_Ment").innerHTML = X;
}

// Object Return
function my_Object() {  //defines function
    let fantasy = {     //creates an object "fantasty" with properties
        type: "Vampire's ",
        diet: "blood ",
        dwelling: "where there's no sun.",
        weakness: "garlic.",
        creature: function() {  //property with method performed
            return this.type + "feed on " + this.diet + "and dwell " + 
            this.dwelling + " They have one weakness, " + this.weakness;
        }       //returns string of property values
    };
    document.getElementById("my_Myth").innerHTML = fantasy.creature(); 
}       //targetted element displays value of object.property

// Break 
function my_Fun2() {
    var k = 0
    var j = "";
    while (k < 10) {
        j += "<br>" + k;
        k = (k + 1);
        if (k === 6) { break; } //stops loop when k is equal to 6
    }
    document.getElementById("Fun2").innerHTML = j;
 }

 // continue
 function please_Continue()  {
    var Never = ["This", " loop", " never", " skips.", " This", " loop", " never", " skips."];   
    var List = "";
    var Z;     
        for (Z = 0; Z < Never.length; Z++) {    
        if (Z === 6) {continue} //skips element position 6
        else if (Z <= 7) {  
            List += Never[Z]; 
        }
    }
    document.getElementById("Continuation").innerHTML = List; 
}
