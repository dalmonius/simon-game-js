//  starting declarations
var allColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];

// random color picker
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = allColors[randomNumber];
    return randomChosenColor;
}

gamePattern.push(nextSequence());

function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}

function buttonPressed(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
    playSound();
}

// buttonPressed(gamePattern[0]);

for (i = 0; i < (allColors.length); i++) {
    $("#" + allColors[i]).click("click", function(){
    userClickedPattern.push(this.id);
    // console.log(userClickedPattern);
    });
}

