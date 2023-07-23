//Ternary function
function ride_Function() {
    var Height, can_Ride;       //Identifiers for variables
    Height = document.getElementById("Height").value;   //Data input from element "Height"
    can_Ride = (Height < 52) ? "You are too short":"You are tall enough";   //Conditional operator given var Height
    document.getElementById("Ride").innerHTML = can_Ride + " to ride.";     //Element targetted will display results from can_Ride
}
//Voting ternary function
function vote_Function() {
    var Age, can_Vote;      //Identifiers for variables
    Age = document.getElementById("Age").value;     //Data input from element "Age"
    can_Vote = (Age < 18) ? "You are too young":"You are old enough";       //Conditional operator given var Age
    document.getElementById("Vote").innerHTML = can_Vote + " to vote.";     //Element targetted wil display results from can_Vote
}
//Keywords and constructor function
function Vehicle(Make, Model, Year, Color) {   //Object construct
    this.Vehicle_Make = Make;       //Defines values
    this.Vehicle_Model = Model;     //"this" gets the values of objects created by "new"
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//New objects of Vehicle()
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {    
    document.getElementById("Keywords_and_Constructors").innerHTML =    //Element targetted will display given variables
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
//"this" and "new" function
function Snowboard(Company, Model, Season) {      //Object construct
    this.Snowboard_Company = Company;       //Defines values
    this.Snowboard_Model = Model;           //"this" gets the values of objects created by "new"
    this.Snowboard_Season = Season;
}

//New objects of Snowboard()
var Shane = new Snowboard("Burton", "Freestyle", 2023);     //Identified variables given values
var Krystle = new Snowboard("GNU", "B-Pro", 2020);
var Jeff = new Snowboard("Solomon", "Assassin", 2022);
function snow_Board() {
    document.getElementById("New_and_This").innerHTML =     //Element targetted will display given variables
    "Shane rides a " + Shane.Snowboard_Season + " " + Shane.Snowboard_Company +
    " " + Shane.Snowboard_Model;
}
//Nested function
function Krystle_Function() {
    document.getElementById("Nested_Function").innerHTML = Favorite()   //Element targetted will display return from Favorite()
    function Favorite() {
        var who = "Krystle's favorite";     //variable who given value
        function Color() {      //Function called by Favorite()
            var color = " color is purple.";    //variable color given value
            return who + color;     //Output is var who + var color
        }
        return Color();     //Favorite() will return output of Color()
     }
}