//  
var allColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];

// random color picker
function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = allColors[randomNumber];
    return randomChosenColor;
}

// gamePattern.push(nextSequence());