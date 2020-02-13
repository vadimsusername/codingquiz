var startBtn = document.querySelector(".start-button");
console.log(startBtn);
var startView = document.querySelector(".start-view");
console.log(startView);
var q1element = document.querySelector(".question1");
console.log(q1element);

var questions = [".question1",".question2",".question3",".question4",".question5"];
var questionIndex =0;
var score = 0;
var timer = 20;
var timeInterval;

function quizOver(){
    document.getElementById("quiz-end").style.display = "block";
    document.getElementById("final-score").textContent = score;
}

startBtn.addEventListener("click",function(){
    startView.style.display = "none";
    q1element.style.display = "block";
    
     timeInterval = setInterval(function(){

        if(timer === 0){
            document.querySelector(questions[questionIndex]).style.display = "none";

            document.getElementById("timeout").style.display = "block";

            setTimeout(function(){
                document.getElementById("timeout").style.display = "none";
                quizOver();
                clearInterval(timeInterval);
            },2000)
            
        }
        else{
            timer--;
            document.getElementById("timer").textContent = timer;
        }
    },1000);
})


document.querySelector(".questions").addEventListener("click", function(event){
   // var ans = event.target.getAttribute("data-answer");
    //console.log(ans);
    if(event.target.matches("button")){
        if(event.target.matches(".correct")){

            console.log("answer is correct");
            score = score + 5;
            var response = document.createElement("h3");
            response.textContent ="Correct";
            console.log(questions[questionIndex]);
            document.querySelector(questions[questionIndex]).appendChild(response);
            
        }else{
            var response = document.createElement("h3");
            response.textContent ="Incorrect";
            document.querySelector(questions[questionIndex]).appendChild(response);
            timer = timer - 3;
        }
        setTimeout(function(){
            document.querySelector(questions[questionIndex]).style.display = "none";
            if(questionIndex === questions.length - 1){
                console.log(document.getElementById("quiz-end"));

                clearInterval(timeInterval);

                document.getElementById("final-score").textContent = score;

                document.getElementById("quiz-end").style.display = "block";
                
            }else{
                questionIndex++;
                document.querySelector(questions[questionIndex]).style.display = "block";
                
            }
        },1000);
    }


})

var highscoresArray = [];

document.getElementById("submit").addEventListener("click",function(event){
    
    event.preventDefault();
    console.log("submit button handler");
    var initials = document.getElementById("initials").value;
    var entry = {scr:score,initls: initials};
    console.log(entry);
    var storage = JSON.parse(localStorage.getItem("highscores"));
    console.log(storage);
    if(!storage){
        highscoresArray.push(entry);
        console.log(highscoresArray);
        console.log(JSON.stringify(highscoresArray));
        localStorage.setItem("highscores",JSON.stringify(highscoresArray));
        console.log(localStorage.getItem("highscores"));
        console.log(JSON.parse(localStorage.getItem("highscores")));

    }else{
        console.log(JSON.parse(localStorage.getItem("highscores")));
        highscoresArray = JSON.parse(localStorage.getItem("highscores"));
        console.log("in else ... highscores = " + highscoresArray);
        highscoresArray.push(entry);
        console.log(highscoresArray);
        localStorage.setItem("highscores",JSON.stringify(highscoresArray));
    }
 
    window.location.href = "highscores.html";
})

//highscores.html script
/*
var scoreBoard = document.getElementById("score-board");

var hsScores = localStorage.getItem("highscores");
console.log(hsScores);
if(hsScores){
    var parsedScores = JSON.parse(hScores);
    console.log(parsedScores);

}
*/
