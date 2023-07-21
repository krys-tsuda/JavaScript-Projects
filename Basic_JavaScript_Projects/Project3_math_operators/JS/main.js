function addition_Function() {      //Defines a function
    var addition = 5 + 5;       //Value given performs addition
    document.getElementById("Add").innerHTML = "1. 5 + 5 = " + addition;      //Assigned element will display variable
}

function subtraction_Function() {     //Defines a function
    var subtraction = 21 - 7;       //Value given performs subtraction
    document.getElementById("Subtract").innerHTML = "2. 21 - 7 = " + subtraction;   //Assigned element will display variable
}

function multiplication_Function() {        //Defines a function
    var multiplication = 25 * 100;      //Value given performs multiplication
    document.getElementById("Multiply").innerHTML = "3. 25 * 100 = " + multiplication;  //Assigned element will display variable
}

function division_Function() {      //Defines a funciton
    var division = 5000 / 100;      //Value given performs division
    document.getElementById("Divide").innerHTML = "4. 5000 / 100 = " + division;    //Assigned element will display variable
}

function multiple_Function() {      //Defines a function
    var multiple = (10 + 5) * 100 / 25;     //Value given performs multiple math operations
    document.getElementById("Multiple").innerHTML = "5. (10 + 5) * 100 / 25 = "  + multiple;    //Assigned element will display variable
}

function modulus_Function() {       //Defines a function
    var modulus = 13 % 4;       //Value given will provide remainder 13 / 4
    document.getElementById("Modulus").innerHTML = "6. The remainder of 13 / 4 is: " + modulus; //Assigned element will display variable
}

function negation_Function() {      //Defines a function
    var x = 15;     //Value given for x
    document.getElementById("Negation").innerHTML = "7. The opposite of 15 is: " + -x;  //Assigned element will display the opposite of x
}

function increment_Function() {     //Defines a function
    var A = 3;  //Value given is 3
    A++;    //Value incrementelly increased by 1
    document.getElementById("Increase").innerHTML = A;     //Assigned element will display variable 
}

function decrement_Function() {     //Defines a function
    var B = 7;  //Value given is 7
    B--;    //Value incrementally decreased by 1
    document.getElementById("Decrease").innerHTML = B;  //Assigned element will display variable
}

function square_Root() {        //Defines a function
    document.getElementById("Root").innerHTML = Math.sqrt(64);  //Performs and displays the sqrt
}

function random_Number() {     //Defines a function
    alert(Math.random());       //Alert window pops up when called displaying random number
}






