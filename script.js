var startView = document.querySelector(".start-view");
var startBtn = document.querySelector(".start-button");
var question1 = document.querySelector("question1");

startBtn.addEventListener("click",function(){
    startView.style.display = "none";
    question1.style.display = "block";
    
})

var questions = [".question1",".question2",".question3"];
var questionIndex = 0;
var score = 0;

document.querySelector(".questions").addEventListener("click", function(event){

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
        }            
        document.querySelector(questions[questionIndex]).style.display = "none";
        if(questionIndex === questions.length - 1){

            document.getElementById("quiz-end").style.display = "block";
            
        }else{
            questionIndex++;
            document.querySelector(questions[questionIndex]).style.display = "block";
            
        }
     }
 
 
 })