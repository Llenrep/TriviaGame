var amountCorrect = 0;
var amountWrong = 0;
var time = 10;

var userChoice;
var correctAnswer;

var queryURL;
var APIkey;

var arrayOfQuestions = [
    intro,
    question1,
    // question2(),
    // question3(),
    // question4(),
    // question5(),
    // question6(),
    // question7(),
    // question8(),
    result
]

// what i might try to do is create this array of functions as each function is a question, and go off of that timer/


function intro() {
    console.log("Intro")
    $("#questions").html('<h6>Welcome, In this game, You will be presented with a small portion of a song and your goal is to guess the next couple of lyrics. Good Luck</h6>');
}

function giphyInsert() { //we fill it in later when we get the first question to work

}

function result() { //just formats the page to show a "results" screen
    console.log("Result")
    $("#buttons").html(""); //clears the buttons from the container
    $(".timer").html(""); //clears the timer as it isn't necessary anymore

    $(".Correct").text("Your amount correct: " + amountCorrect);
    $(".Wrong").text("Your amount wrong: " + amountWrong);
    $("#questions").html('<h2>Congratulations, You got through the little quiz! Here are your results!</h2>');
    // Displays the final message along with the amount correct and wrong. If we get far enough, we can add another thing
}

// Okay
// We set the value for the correct answer
// first we need the buttons to be able to do something when clicked
// we got the buttons to do something and userchoice has a value, however, im not sure
// because right now the button is set equal to the actual html element.
// do I want that? or do I want a value. each of the questions have 4 variables but
// scratch that, just choose the one that will increase your score and the ones that wont,
// i have a good feeling ill run into issues with this later but im gonna go with it. push

function question1() {

    console.log("question 1")
    $("#questions").html('<h2>"Do You Remeber? The..."</h2>');
    var ans1 = $("#pot-ans-1").html("<p>21st Night of September...</p>");
    var ans2 = $("#pot-ans-2").html("<p>The Way...</p>");
    var ans3 = $("#pot-ans-3").html("<p>How the stars stole the night away...</p>");
    var ans4 = $("#pot-ans-4").html("<p>My thoughts are with you...</p>");

    // correctAnswer = ans1; //equal to the actual html

    $("#pot-ans-1").on("click", function () {
        userChoice = ans1;
        amountCorrect++;
    });

    $("#pot-ans-2").on("click", function () {
        userChoice = ans2;
        amountWrong++;
    });

    $("#pot-ans-3").on("click", function () {
        userChoice = ans3;
        amountWrong++;
    });

    $("#pot-ans-4").on("click", function () {
        userChoice = ans4;
        amountWrong++;
    });
};

function question2() {
    console.log("Question 2");

}

function question3() {
    console.log("Question 3");

}

function question4() {
    console.log("Question 4");

}

function question5() {
    console.log("Question 5");

}

function question6() {
    console.log("Question 6");

}

function question7() {
    console.log("Question 7");

}

function question8() {
    console.log("Question 8");

}

function timer() {
    console.log("Yuuuhhhh");

    setTimeout(function () {

        time--; //its a countdown so we are looking for decerements specifically

        var secs = Math.floor(time / 10);

        var tenths = time % 10;

        document.getElementById("timer").innerHTML = secs + ":" + tenths;

        timer();

        if (secs === 0) {

            time = 100;
            $("#timer").html("");
            alert("Next Question");

        };

    }, 1000);

}

function callFunctions(arr){
    for (i = 0; i < arr.length; i++) {
        arr[i]();
    } 
}

$(document).ready(function () { //so as of right now, we got the function to run with timer, problem:
    
    setInterval(callFunctions(arrayOfQuestions), 10000);

})