// Countdown function
function countdown() {      // function called onclick
    var seconds = document.getElementById("seconds").value;     // variable given input from user as the value

    function tick() {
        seconds = seconds - 1;  // tick() takes the value of seconds and says subtract 1
        timer.innerHTML = seconds;  // what element timer displays
        var time = setTimeout(tick, 1000);  // time is given the value of setTimeout() which will tick every 1000 milaseconds (1s)
        if (seconds == -1) {    // if the value of seconds == -1 (our countdown reaches 0)
            alert("Time's up!");    // window alert initiated
            clearTimeout(time);     // clears input
            timer.innerHTML = "";   // timer display is blank
        }
    }
    tick();     // after user gives input (seconds) tick() is initiated
}

// Slideshow JS
let slideIndex = 1;     // defines variable slideIndex as 1, slideIndex keeps track of currently displayed slide
playSlides(slideIndex); // first slide is displayed on page load

// Next/previous controls
function nextSlides(n) {            // function takes n, which represents slides to move forwards or backward
    playSlides(slideIndex += n);    // calls function playSLides() with updated slideIndex value to be displayed (next or previous slide)
}

// Thumbnail image controls
function currentSlide(n) {          // funtion responsible for specific slide. n represents index of slide to be displayed
    playSlides(slideIndex = n);     // function displays the given value to slideIndex (corresponding slide)
}

function playSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");   // slides is defined as element mySlides
    let dots = document.getElementsByClassName("dot");      //dots is defined as element dots
    if (n > slides.length) {slideIndex = 1}     // if n is greater than number of slides then slideIndex = 1 (creates a loop to first slide after last is displayed)
    if (n < 1) {slideIndex = slides.length}     // if n is less than one slideIndex is set to the last slide (creats a loop to last slide after the first is displayed)
    for (i = 0; i < slides.length; i++) {       
        slides[i].style.display = "none";       // hides our slides
    }
    for (i = 0; i < dots.length; i++) {     // goes through all the dots removing active styling
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";   // current slide and corresponding dot are displayed by style display block
    dots[slideIndex-1].className += " active";      // adds active properties to current dot
}