function my_Dictionary() {      //Defines a function
    var Plant = {       //Gives Variable Plant creating a dictionary, collection of key/value's
        Type:"Bird of Paradise",    //key:value
        Light:"Bright Light",   //key:value
        Water:"Water heavy when dry.",  //key:value
        GrowthRate:"Slow",  //key:value
    };
    delete Plant.Water; //Operator delete removes key Water from Plant dictionary
    document.getElementById("Dictionary").innerHTML = Plant.Water;  //Assigned element will display when function is called
    
}