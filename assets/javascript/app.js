$(document).ready(function(){

    document.getElementById("question-block").style.visibility = "hidden";
    document.getElementById("result").style.visibility = "hidden";
    var answers = [];

    $("#game-start").on("click", function () {

        document.getElementById("question-block").style.visibility = "visible";
        var timer = 10
    
        var time = setInterval(function(){
        timer--
        
	    if(timer === 0){
            console.log("Time's Up!");
            clearInterval(time);
            document.getElementById("question-block").style.visibility = "hidden";
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("timecount").innerHTML = "Game Over!";
        
	    } else {
            console.log(timer)
            document.getElementById("timecount").innerHTML = "Time remaining: " + timer;
            

	}
    },1000)

   var answerCode = ["Velazquez", "Courbet", "Kandinsky", "Friedrich", "perspective", "Rauschenberg", "Braque", "Preacher", "Pre-Raphaelites"];
   var score = 0;

    //for (i=0; i < 9; i++) {
   $('input[name=q1]').click(function() {
    console.log(this.value);
    if (this.value === answerCode[0]) {
        score ++
        document.getElementById("result").innerHTML = "Correct answers: " + score + " out of 9";
    } else { 
        score = 0;
        document.getElementById("result").innerHTML = "Correct answers: " + score + " out of 9";
    }
  
  

  
   })  
//}
})
});