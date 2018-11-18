function timer(){
    var x = setInterval(function() {
        alert("alert WHADDUP")
      }, 10000);                      
}

function result(){


}


function question1(){
    console.log("Question 1")
    $("#questions").html('<h2>"Do You Remeber? The..."</h2>')
    var ans1 = $("#pot-ans-1").html("<p>21st Night of September...</p>")
    var ans2 = $("#pot-ans-2").html("<p>The Way...</p>")
    var ans3 = $("#pot-ans-3").html("<p>How the stars stole the night away...</p>")
    var ans4 = $("#pot-ans-4").html("<p>My thoughts are with you...</p>")
  
}

function question2(){
    console.log("Question 2")

}

function question3(){
    console.log("Question 3")

}

function question4(){
    console.log("Question 4")

}

function question5(){
    console.log("Question 5")

}

function question6(){
    console.log("Question 6")

}

function question7(){
    console.log("Question 7")

}

function question8(){
    console.log("Question 8")

}


$(document).ready(function(){
    
    var amountCorrect = 0;
    var amountWrong = 0;

    question1();
    // timer();

})