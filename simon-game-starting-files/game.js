//  starting declarations
var allColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// random color picker
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = allColors[randomNumber];
    level++;
    $("h1").text("Level " + level);
    return randomChosenColor;
}

function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function buttonPressed(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
}

// buttonPressed(gamePattern[0]);

function clickHandler (){
    for (i = 0; i < (allColors.length); i++) {
        $("#" + allColors[i]).click("click", function(){
        buttonPressed(this.id);
        userClickedPattern.push(this.id);
        playSound(this.id);
        });
    }
}

function showUser (color){
    buttonPressed(color);               // Maybe I need a for loop here, to play the entire sequence
    playSound(color);                   // passing functions as arguments? maybe there's the missing piece
}

function checkSequence(){
    if (userClickedPattern === gamePattern) {
        nextSequence();
    } else {
        alert("game over!");
    }
}

// game start

$(document).keypress("keypress", function(){
    gamePattern.push(nextSequence());
    console.log(gamePattern);
    showUser(gamePattern);
    $(document).off();
});

/*
I am somewhat annoyed by outside noise because
you can find the answer for a problem in your floodlight consciousness
but if your floodlight consciousness is filled with distracting noise
then you wont be as efficient in finding the answer
and that's a bit annoying because I want to find the answer
 */