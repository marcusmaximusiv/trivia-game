//setting an object of game to store multiple variables so that when i play 
var game = {
    score: 0,
    time: 60
}

//this section of  code is for the countdown timer and using the object game.time counting down from 60 seconds 
var timer = 61;
var interval = setInterval(function () {
    timer--;
    // Display '' wherever you want to display it.
    if (timer <= 0) {
        clearInterval(interval);
        $('#countdown_value').html("<h2>0</h2>");
        alert("Your score was " + game.score);
        reset();
        return;
    } else {
        $('#countdown_value').html(timer);
        console.log(timer + " seconds left");
    }
}, 1000);

//Setting multiple timeouts to test if the logic for the timeout is working as expected
//setTimeout(start, 1000 * 0);
/*setTimeout(time30, 1000 * 30);
setTimeout(timeUp, 1000 * 60);*/ //this second was the countdown timer 
//appending first number for the seconds to the countdown value
/*function start() {
    $("#countdown_value").html("<h2>" + game.time + "</h2>");
    console.log("60 seconds left")
}*/
/*function time30() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log 30 seconds left 
    //append the value of 30 to the countdown value section
    $("#countdown_value").html("<h2>30</h2>");
    console.log("30 seconds left");
}*/

/*function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done and then submits the score for the questions 
    // game then resets itself and the timeout goes through all over again
    console.log("done");
    $("#countdown_value").html("<h2>0</h2>");
    alert("Your score was " + game.score);
    reset();
}*/

//this allows to game to reset onclick on the reset button as well as after sets the timeout counter back 
function reset() {
    alert("Resetting game now");
    timer = 61;
    console.log(timer + " seconds left");
    $("#countdown_value").html("<h2>" + timer + "</h2>");
}