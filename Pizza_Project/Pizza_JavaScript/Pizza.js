//Initializes our string so it can get passed from 
//function to function, growing line by line into a full receipt
function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");    //creates an array from class size elements
    for (var i = 0; i < sizeArray.length; i++) {    //creates a for loop to run through array
        if (sizeArray[i].checked) {                 //if the input given to 'size' was checked is true
            var selectedSize = sizeArray[i].value;  //then the value of that input would be given to var selected size
            text1 = text1+selectedSize+"<br>";  //what displays 
        }
    }   //if an instance is true selectedSize is given the value of that instance
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize +" = $"+sizeTotal+".00");
    console.log("size text1: " +text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);  //variables get passed on to each function
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //creates an array from class "toppings" elements
    for (var j = 0; j < toppingArray.length; j++) {     //creates a for loop to run through array
        if (toppingArray[j].checked) {      //if element at toppingArray[j] is true
            selectedTopping.push(toppingArray[j].value);    //then add the element at toppingArray[j] to selectedTopping array
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>"; //toppingArray[j].value is added to text1 handed from previous funciton
        }
    }
    var toppingCount = selectedTopping.length;  //toppingCount = how many items in selectedTopping array
    if (toppingCount > 1) {                //if the items in toppingCounta array is greater than 1                   
        toppingTotal = (toppingCount - 1);  //subtract 1 (for free topping)
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};  //console logs the values given to variables
    // which is then displayed at the targeted elemnt in HTML document
