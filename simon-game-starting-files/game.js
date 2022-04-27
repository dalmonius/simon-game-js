//  starting declarations
var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keydown("keydown", function(){
    nextSequence();
    $(document).off();
});

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    buttonPressed(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
  });

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("right");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function (){
            nextSequence();
            }, 1444);
        }
    } else {
        console.log("wrong")
    }
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    buttonPressed(randomChosenColor);
    playSound(randomChosenColor);
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