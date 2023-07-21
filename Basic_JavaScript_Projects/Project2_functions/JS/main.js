function My_First_Function() {      //Defines a function
    var str = "Look what happened!";    //What displays when function is called.    
    document.getElementById("button_text").style.color= "Fuchsia";  //Styles what is called.
    document.getElementById("button_text") .innerHTML = str;    //The assigned element targetted.
}

function My_Second_Function() {     //Defines a function.
    let sentence = "I am learning";     //First string to be concatenated 
    sentence += " a lot from this course!";     //Second string to be concatenated
    document.getElementById("Concatenate").innerHTML = sentence;    //The assigned element targetted.
}