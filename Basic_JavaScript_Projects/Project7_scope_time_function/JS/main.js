//global variable
var x = 100;
function my_Fun1() {
    document.getElementById("Global_1").innerHTML = (200 + x);  //uses global variable
}

function my_Fun2() {
    document.getElementById("Global_2").innerHTML = (300 + x);  //uses global variable
}

//local variable
function my_Fun3() {
    var a = 50;     //local variable
    document.getElementById("Local_1").innerHTML = (75 + a);    //uses local variable
}

function my_Fun4() {
    document.getElementById("Local_2").innerHTML = (25 + a);    //no output
}

//function with error
function error_Fun() {
    console.log(100 - a); //debug using console
}

//function to call multiple functions
function variable_Fun() {
    my_Fun1();
    my_Fun2();
    my_Fun3();
    my_Fun4();
    error_Fun();
}

//if statement function
function get_Date() {
    if (new Date() .getHours() < 10) {  //condition to be met
        document.getElementById("my_Id").innerHTML = "Good morning!";   //directions if condition is true
    }
}

//if statement function
function statement_Function() {
    if (10 > 5) {       //condition to be met
        document.getElementById("this_Id").innerHTML = "10 is greater than 5!"; //directions if condition is true
    }
}

//else statement
function the_90s() {
    var Birth = document.getElementById("Year").value;  //Variable defined given input of "Year" as value 
    var Born;
    if (Birth > 1989 && Birth < 2000) {     //condition to be met
       Born = "You are a 90's baby :)";     //displays if condition is true
    }
    else {
        Born = "You are not a 90's baby :(";    //displays if condition is false
    }
    document.getElementById("Results").innerHTML = Born;    //Element targetted wil display value of Born
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();   //variable defined by dat().getHours() method
    var Reply;
    if (Time < 12 == Time > 0) {    //condition to be met
        Reply = "It is morning time!";  //displays if condition is true
    }
    else if (Time >= 12 == Time < 18) {     //condition to be met if first condition is not true
        Reply = "It is afternoon.";     //displays if condition is true
    }
    else { 
        Reply = "It is evening time.";      //displays if neither condition is true
    }
    document.getElementById("Time_of_day").innerHTML = Reply;   //Element targetted that will display value of Reply
}

//else if statement
function Choice(elem) {
    if (elem.id == "Yes") {     //condition to be met
        window.alert("You like ice cream!");    //alert will display if condition is true
    }
    else if (elem.id == "No") {
        window.alert("You dont like ice cream!");   //alert will display if condition is true
    }
}

