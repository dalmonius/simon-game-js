//  starting declarations
var allColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

// random color picker
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = allColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
    console.log(gamePattern);
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

function clickListener(){
    buttonPressed(this.id);
    userClickedPattern.push(this.id);
    playSound(this.id);
    console.log(userClickedPattern);
    if (gamePattern.toString() === userClickedPattern.toString()){
        nextSequence();
    } else if (gamePattern.toString() != userClickedPattern.toString()){
        alert("oh shit");
    }
}

function clickHandler(){
    for (i = 0; i < (allColors.length); i++) {
        $("#" + allColors[i]).click("click", clickListener);
    }
}

function showUser(color){
    buttonPressed(color);               // Maybe I need a for loop here, to play the entire sequence
    playSound(color);                   // passing functions as arguments? maybe there's the missing piece
}



// game start

$(document).keypress("keypress", function(){
    nextSequence();
    showUser(gamePattern);
    $(document).off();
});

clickHandler();

// to compare two arrays loop through them and compare every value

