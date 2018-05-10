$(document).ready(function(){

    document.getElementById("question-block").style.visibility = "hidden";
    document.getElementById("results").style.visibility = "hidden";
    var answers = [];

    $("#game-start").on("click", function () {

        document.getElementById("question-block").style.visibility = "visible";
        var timer = 5
    
        var time = setInterval(function(){
        timer--
        
	    if(timer === 0){
            console.log("Time's Up!");
            clearInterval(time);
            document.getElementById("question-block").style.visibility = "hidden";
            document.getElementById("results").style.visibility = "visible";
            document.getElementById("timecount").innerHTML = "Game Over!";
        
	    } else {
            console.log(timer)
            document.getElementById("timecount").innerHTML = timer;
            

	}
    },1000)
    
   var answerCode = ["Velazquez", "Courbet", "Kandinsky", "Friedrich", "perspective", "Rauschenberg", "Braque", "Preacher", "Pre-Raphaelites"];
   
   $("input[type='radio'][name='rate']:checked").val();
    