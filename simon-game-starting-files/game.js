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
    playSound(color);
}

// buttonPressed(gamePattern[0]);

for (i = 0; i < (allColors.length); i++) {
    $("#" + allColors[i]).click("click", function(){
    // userClickedPattern.push(this.id);                no need for this here
    // console.log(userClickedPattern);
    buttonPressed(this.id);
    });
}

// game start

$(document).keypress("keypress", function(){
    buttonPressed(nextSequence());
    $(document).off();
});

