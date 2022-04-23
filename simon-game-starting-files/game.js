/*
the idea is very easy.
I need to make this game using javascript and jquery
the html and css is already done, all I need to do is make the behaviour.

0. what is the first step?
the first step is to understand how the game works.

first, the page is freezed, nothing happens unless you press a key to start playing.
second, as you press a key, the game starts.
the game will make a sequence and the player has to do the same thing.
the sequence increases by one, randomly.
every time the player finishes a full sequence without errors, he scores a point
if he misses, it's game over.

alright, that's how the game works.

so, what now?

now I have to understand how to do that with javascript, and I also can use jQuery to make my life easier.
*/
// now that I'm on my on with this, i think to myself: will I work forever inside a function?

// Well, I made this animation which makes the background slightly darker for 0.1s
// now, how do I make it play a sequence on it's own?

// I can tell that I've learned a lot doing that all on my own.
// because when you're on your own, when you are all alone
// it makes you more conscious of your actions
// when you're with someone, for some reason I feel less conscious of my actions.
// I get into a state of consciousness where thoughts don't rule.
// ...
// ...
// now that I see this:
// one consistent factor is that other people's thoughs interfere with yours.
// when there are interference, there are problems.
// so what do we do?
// ...
// I see...
// for some reason I pay more attention to the outside
// ah for that same reason I pay less attention to the inside.
// that means I don't understand myself very well.
// one common problem that happens a lot is
// when someone does something I don't like or don't want
// that is a very obvious kind of interference
// it's almost as if I couldn't create a separation from the person outside
// from the person inside.

/*
0. press a button to start
1. play random button.
2. prompt the user for the same button press.
2.1 if the user presses the wrong button then game over.
2.2 if the user presses the right button, he scores a point.
3. add + 1 to the sequence
4. play sequence
5. prompt the user for the same sequence
5.1 if the user presses the wrong sequence then game over.
5.2 if the user presses the right sequence, he scores a point.
4. add + 1 to the sequence... indefinitely.
*/

// should I work with arrays?
var simonSequence = []; 

// press a key to start
$(document).keypress("click", function(){
    $("body").css("backgroundColor", "#011");
    setTimeout(function(){
        $("body").css("backgroundColor", "#011F3F")}, 100);
    $("h1").text("Level 1");
});

// sound and animation clicks, event listeners
var green = $("#green").click("click", function(){
    var greenSound = new Audio("./sounds/green.mp3");
    greenSound.play();
    e = this.id
    buttonPressedAnimation(e);
});

var red = $("#red").click("click", function(){
    var redSound = new Audio("./sounds/red.mp3");
    redSound.play();
    e = this.id
    buttonPressedAnimation(e);
});

var yellow = $("#yellow").click("click", function(){
    var yellowSound = new Audio("./sounds/yellow.mp3");
    yellowSound.play();
    e = this.id
    buttonPressedAnimation(e);
});

var blue = $("#blue").click("click", function(){
    var blueSound = new Audio("./sounds/blue.mp3");
    blueSound.play();
    e = this.id
    buttonPressedAnimation(e);
});

// button pressed animation
function buttonPressedAnimation(e) {
    $("#" + e).addClass("pressed");
    setTimeout(function(){
        $("#" + e).removeClass("pressed");
    }, 100)
}

// need to create a variable for these selectors.
// feels wrong, feels like I'm typing, copying and pasting way too much. How can I improve this?

// create computer sequence
var computerSequence = [];

function computerSequenceGenerator() {
    var randomNumber = Math.floor(Math.random()*4);
    if (randomNumber === 0) {
        return "green";
    } else if (randomNumber === 1) {
        return "red";
    } else if (randomNumber === 2) {
        return "yellow";
    } else {
        return "blue";
    }
}

// make the computer click a button by itself
function computerClick(color) {
    $("." + color).trigger("click");
}

// computerClick(computerSequenceGenerator());
// now this function call can create random clicks.
// now how can I log them and reproduce them?

// game start


