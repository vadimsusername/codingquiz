var startView = document.querySelector(".start-view");
var questionView = document.querySelector(".questions");
var startBtn = document.querySelector(".start-button");


startBtn.addEventListener("click",function(){
    startView.style.display = "none";
    questionView.style.display = "block";
    
})