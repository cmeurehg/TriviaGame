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
        question: "Which one of the following artists helped shape the Romantic Period?",
        answer: "Caspar David Friedrich",
        decoy1: "Giotto di Bondone",
        decoy2: "J.M.W. Turner"
    },

    {
        question: "The Renaissance is characterized by:",
        answer: "The development of perspective",
        decoy1: "The emphasis on religous themes",
        decoy2: "The development of light and dark contrasts"
    },

    {
        question: "Who is not considered a member of the Abstract Expressionists?",
        answer: "Robert Rauschenberg",
        decoy1: "Barnett Newman",
        decoy2: "Robert Motherwell"
    },

    {
        question: "Who was a close collaborator of Pablo Picasso?",
        answer: "Georges Braque",
        decoy1: "Amedeo Modigliani",
        decoy2: "Paul Cézanne"
    },

    {
        question: "Vincent van Gogh became a painter because he could not become a:",
        answer: "Preacher",
        decoy1: "Stock broker",
        decoy2: "Sculptor"
    },

    {
        question: "The use of colour as an independent means was not a priority for:",
        answer: "The Pre-Raphaelites",
        decoy1: "The Fauvists",
        decoy2: "The Nabis"
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


    












    


