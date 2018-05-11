$(document).ready(function(){

    
    
    var test = [{
                                    
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },
    

    {
        question: "Who wrote the Realist Manifesto?",
        answer: "Gustave Courbet",
        decoy1: "Émile Zola",
        decoy2: "Stéphane Mallarmé"
    },

    {
        question: "Who is considered one of the pioneers of Abstract Painting?",
        answer: "Wassily Kandinsky",
        decoy1: "Marcel Duchamp",
        decoy2: "Pablo Picasso"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    },

    {
        question: "Who painted Las Meninas?",
        answer: "Diego de Velázquez",
        decoy1: "Francisco de Zurbarán",
        decoy2: "El Greco"
    }

];


    $("#game-start").on("click", function () {

        for (i=0; i < test.length; i ++) {
                    
            $("#question-card").append(test[i].question);
            var options = $("<div>");
            options.attr("id=option-set");
            options.append(test[i].answer + test[i].decoy1 + test[i].decoy2);
            $("#question-card").append(options); 
            break;
            
            
            
            
            
        }
            var timer = 10;
            var score = 0;
    
            var time = setInterval(function(){
                timer--
        
	            if(timer === 0){
                    console.log("Game Over!");
                    clearInterval(time);
                    $("#question-card").html("");
                    document.getElementById("timecount").innerHTML = "Game Over!";
                    
                    if(answer[i].click){
                        score++
                    }

                    
                    $("#result").text("Score: " + score);
                    
                    
                  
                
        
	            } else {
                    console.log(timer)
                    document.getElementById("timecount").innerHTML = "Time remaining: " + timer;
                
            
                  //  $(".col-lg-12").append("<input type='radio' name='answers' value=test[i][decoy1] />);
                    
                  
                }
                
            }, 1000);
                
          
            
        
            
            
           
            



        
            })




        })


    












    


