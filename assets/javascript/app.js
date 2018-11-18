var amountCorrect = 0;
var amountWrong = 0;

function timer(){
    setTimeout(function(){
        var x = setInterval(function() {
        alert("alert WHADDUP")
      }, 10000); 
    },100)                   
}

function giphyinsert(){ //we fill it in later when we get the first question to work

}

function result(){ //just formats the page to show a "results" screen
    $("#buttons").html(""); //clears the buttons from the container
    $(".timer").html("") //clears the timer as it isn't necessary anymore

    $(".Correct").text("Your amount correct: " + amountCorrect)
    $(".Wrong").text("Your amount wrong: " + amountWrong)
    $("#questions").html('<h2>Congratulations, You got through the little quiz! Here are your results!</h2>'); 
    // Displays the final message along with the amount correct and wrong. If we get far enough, we can add another thing
}

// Okay
// We set the value for the correct answer
// first we need the buttons to be able to do something when clicked

function question1(){
    console.log("Question 1")
    $("#questions").html('<h2>"Do You Remeber? The..."</h2>');
    var ans1 = $("#pot-ans-1").html("<p>21st Night of September...</p>");
    var ans2 = $("#pot-ans-2").html("<p>The Way...</p>");
    var ans3 = $("#pot-ans-3").html("<p>How the stars stole the night away...</p>");
    var ans4 = $("#pot-ans-4").html("<p>My thoughts are with you...</p>");

    var userChoice;

    correctAnswer = ans1;

    $("#pot-ans-1").on("click", function(){
        console.log("choice 1")
        userChoice = ans1;

    });

    // $("#pot-ans-2").on("click", function(){

    //     userChoice = ans2;

    // });

    // $("#pot-ans-3").on("click", function(){

    //     userChoice = ans3;

    // });

    // $("#pot-ans-4").on("click", function(){

    //     userChoice = ans4;

    // });

    if (userChoice === correctAnswer){
        amountCorrect++;
        console.log("Correct Answer!")
    } //else {
    //     amountWrong++;
    //     console.log("Wrong Answer!")
    // }
  
};

function question2(){
    console.log("Question 2");

}

function question3(){
    console.log("Question 3");

}

function question4(){
    console.log("Question 4");

}

function question5(){
    console.log("Question 5");

}

function question6(){
    console.log("Question 6");

}

function question7(){
    console.log("Question 7");

}

function question8(){
    console.log("Question 8");

}


$(document).ready(function(){
    
   // for (i = 0; i < 9; i++){

    // }

    question1();
    
    timer();

    result();

})