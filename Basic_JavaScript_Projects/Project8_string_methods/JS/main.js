//concatenate method
function connect_Strings() {    //defines a function
    var sen_1 = "Nobody likes";  //variables given string values
    var sen_2 = " you when";
    var sen_3 = " you're 23.";
    var complete = sen_1.concat(sen_2, sen_3);  //variable given the value of concat() method
    document.getElementById("complete_Sentence").innerHTML = complete;  //displays concatenated strings
}

//slice method
function cut_Strings() {    //defines a function
    var Sentence = "My friends say I should act my age."; //variable given string value
    var Cut = Sentence.slice(3,10);     //characters of Sentence string given to slice() method
    document.getElementById("cut_Out").innerHTML = Cut; //displays characters from sliced string
}

//uppercase method
function capitalize_Function() {    //defines a function
    text = "Watch me convert into all uppercase letters.";  //variable given string value
    result = text.toUpperCase();    //variable given the value of .toUpperCase() method
    document.getElementById("upper_Case").innerHTML = result;   //displays string in all uppercase letters
}

//search method
function go_Find() {    //defines a function
    text = "Oh where, oh where, might I find you."; //variable given string value
    result = text.search("you");    //variable given value of .search() method
    document.getElementById("and_Seek").innerHTML = result;     //displays index of string given to .search() method
}

//toString method
function convert_Me() { //defines a function
    var F =(5);
    document.getElementById("into_Something").innerHTML = "Watch this number become a string: " + F.toString();   
    //displays string value from number converted by toString() method
}

//toPrecision() method
function make_Me() { //defines a function
    var G =(83.838383); //variable given number value
    document.getElementById("more_Precise").innerHTML = G.toPrecision(4);  //displays value formatted by toPrecision() method
}

//toFixed method
function fix_Me() {     //defines a function
    var N = 2346.23856903;   //variable given a number value
    document.getElementById("new_Me").innerHTML = N.toFixed(5); //displays number value given to.Fixed() as string rounded to 5 decimals
}

//valueOf method
function i_Know() {     //defines a function
    var what_Is = "I know my value.";   //variable given string value
    document.getElementById("my_Value").innerHTML = what_Is.valueOf(); //displays string value of variable given
}