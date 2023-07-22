document.write("7" + 3);    //utilizing document.write coercing two different types of data together

function my_Function() {        //Displaying NaN cant dived 0 by 0
    document.getElementById("Test").innerHTML = 0/0;
}

function string_Function() {        //Determines if var str is not a number
    document.getElementById("String").innerHTML = isNaN("Hello there")
}

function number_Function() {        //Determines if var num is not a number
    document.getElementById("Number").innerHTML = isNaN("192");
}

function positive_Function() {      //Displaying infinity
    document.getElementById("Positive").innerHTML = 3E310;
}

function negative_Function() {      //Displaying -infinity
    document.getElementById("Negative").innerHTML = -2E310;
}

function true_Function() {      //Boolean logic true or false
    document.getElementById("True").innerHTML = (10 > 5);
}

function false_Function() {     //Boolean logic true or false
    document.getElementById("False").innerHTML = (7 < 3);
}

console.log(23 + 45);
console.log(16 < 3);
//console displays output

function yes_Function() {       //Utilizing == for true or false same value
    document.getElementById("Yes").innerHTML = ((8 + 8) == 16);
}

function no_Function() {        //Utilizing == for true or false same value
    document.getElementById("No").innerHTML = (25 == (25-5));
}

function a_Function() {     //Utilizing === for true or false same value and data type
    document.getElementById("A").innerHTML = 15 === 15;
}

function b_Function() {     //Utilizing === for true or false same value and data type
    document.getElementById("B").innerHTML = 25 === "35";
}

function c_Function() {     //Utilizing === for true or false same value and data type
    document.getElementById("C").innerHTML = 20 === "20";
}

function d_Function() {     //Utilizing === for true or false same value and data type
    document.getElementById("D").innerHTML = 17 === 28;
}

function aa_Function() {        //Utilizing AND operator for true or false
    document.getElementById("AA").innerHTML = (7 > 3 && 5 < 10);
}

function bb_Function() {        //Utilizing AND operator for true or false
    document.getElementById("BB").innerHTML = (15 > 13 && 18 < 12) ;
}

function cc_Function() {        //Utilizing OR operator for true or false
    document.getElementById("CC").innerHTML = (8 > 3 || 9 < 4);
}

function dd_Function() {        //Utilizing OR operator for true or false
    document.getElementById("DD").innerHTML = (1 > 6 || 11 < 2);
}

function ee_Function() {        //Utilizing NOT operator for true or false
    document.getElementById("EE").innerHTML = !(3 < 5);
}

function ff_Function() {        //Utilizing NOT operator for true or false
    document.getElementById("FF").innerHTML = !(3 > 5);
}