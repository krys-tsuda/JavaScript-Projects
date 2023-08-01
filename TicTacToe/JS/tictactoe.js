// Variable keeps track of whose turn it is
let activePlayer = "X";
// this array stores an array of moves. Determines win conditions 
let selectedSquares = []; 

// function for placing an x or o in a square
function placeXOrO(squareNumber) {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of the selectSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);  
        //This condition checks who's turn it is.
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/myX.png")';
             //Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the myO.png is placed in HTML
            select.style.backgroundImage = 'url("images/myO.png")';
        }
        //squareNumber and active Player are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //If active player is 'X' change it to 'O'.
            activePlayer = 'O';
            //If active player is anything other than 'X'
        } else {
            //Change the activePlayer to 'X'
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //This function disables clicking for computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and enebles click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returnign true is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected by the conputer
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variables stores a random numver 0-8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selevcted already
        while (!success) {
            //A random number beween 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasnt been selected yet.
            if (placeXOrO(pickASquare)) {
                //This line calls the function
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for the 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //Thes 3 variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) { return true; }
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickables.
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a paramenter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines');
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d');
    let x1 = coordX1, //This line indicates where the start of a lines x axis is.
        y1 = coordY1, //start of lines y axis
        x2 = coordX2, //end of a lines x axis
        y2 = coordY2, //end of a lines y axis
        x = x1, //stores temporary x axis data we update in our aninmation loop.
        y = y1; //stores temporary y axis data we update in our animation loop.

    //This function interacts with the canvas.
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608); //clears content from last loop iteration.
        c.beginPath(); // starts new path
        c.moveTo(x1, y1); //moves us to a starting poin in our new line
        c.lineTo(x, y); //indicates the end point in our line.
        c.lineWidth = 10; //sets the width of our line;
        c.strokeStyle = 'rgba(70, 255, 33, .8)'; // sets color of line
        c.stroke(); //draws everything above
        if(x1 <= x2 && y1 <= y2) { //checks if we've reached endpoints.
            if (x < x2) { x += 10; } //adds 10 to previous end x endpoint
            if (y < y2) { y += 10; } //adds 10 to previous end y endpoint
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); } //necessary for the 6, 4, 2 win conditions
        }
        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10 }
            if (y > y2) { y -= 10 }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        const animationLoop = requestAnimationFrame(clear); //starts animation loop
        c.clearRect(0, 0, 608, 608); //This line clears our canvas
        cancelAnimationFrame(animationLoop); //This line stops our animation loop
    }
    disableClick(); //disallows clicking while the win sound is playing
    audio('./media/winGame.mp3'); //win sound
    animateLineDrawing(); //calls our main animation loop
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//This function resets the game in the event of a tie or a win
function resetGame() {
    //This fo rloop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i)); //gets the HTML element i
        square.style.backgroundImage = ''; //removes our backgroundImage
    }
    //resets our array so it is empty and we can start over
    selectedSquares = [];
}


  