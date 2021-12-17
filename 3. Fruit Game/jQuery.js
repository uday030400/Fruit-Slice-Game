var playing = false;
var step;
var action;
var score ;
var trialsLeft;
var time;
var fruit = ['apple.jpg','banana.jfif','grapes.jfif','mango.jfif','muskmelon.jfif','orange.jfif'
            ,'papaya.jfif','pineapple.jfif','pomegranate.jfif','watermelon.jfif'];
$(function(){
// Click on the start/reset button
    $("#startReset").click(function(){
        // are we playing?
            // yes
            if(playing == true){
                //     reload the page
                location.reload();
            }

            // no 
            else{
                // now playing
                playing = true;

                //     show trials left
                $("#trialsLeft").show();
                trialsLeft = 3;
                addHearts(trialsLeft);

                // set score to zero
                score = 0;
                $("#scoreValue").html(score);

                //     change button to reset button
                $("#startReset").html("Reset Game");

                // start sending fruit
                startAction();
            }
    });

    $("#fruit1").mouseover(function(){
        score++;
        $("#scoreValue").html(score);
        document.getElementById("sliceSound").play();
        // $("#sliceSound")[0].play();

        clearInterval(action);

        $("#fruit1").hide("explode",500);

        setTimeout(startAction, 600);
    });



    
        
         
        
        
        
        //     1. create a random fruit
        //     define a random step
        //     2. move fruit down one step every 30 sec
        //              
                    // is fruit too low?
                        // no -> repea no. 2
                        // yes -> any trials left?
                                // yes -> repeat
                                // no -> show game over and button to start game
        
        //  slice a fruit
            // play sound
            //  explode fruit


// functions

function addHearts(trialsLeft){
    $("#trialsLeft").empty();
    for(i=0;i < trialsLeft; i++){
        $("#trialsLeft").append(' <img src="images/heart.png" class="life"> ');         
    }
}

function startAction(){
    chooseFruit();//choose a random fruit
    $("#fruit1").show();
    $("#fruit1").css({'left':Math.round(750*Math.random()),'top':-50});

    step = 1+Math.round(5*Math.random());
    if(score<5){
        time=30;
    }
    else if(score<10){
        time=20;
    }
    else if(score<15){
        time = 15;
    }
    else if (score<20){
        time = 10;
    }
    else{
        time = 5;
    }
    action = setInterval(function(){
        $("#fruit1").css('top', $("#fruit1").position().top + step);

        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            if(trialsLeft > 1){
                chooseFruit();//choose a random fruit
                $("#fruit1").show();
                $("#fruit1").css({'left':Math.round(750*Math.random()),'top':-50});

                step = 3+ Math.round(3*Math.random());

                trialsLeft--;
                addHearts(trialsLeft);
            }
            else{
                // playing=false;
                $("#gameOver").show();
                $("#Yourscore").html(score);

                // stopAction();
            }
        }
    },time)
}

function chooseFruit(){
    $("#fruit1").attr('src','images/'+ fruit[Math.round(9*Math.random())]);
}

function stopAction(){
    clearInterval(action);
}  

});

// //jquery.js
// var playing = false;
// var score;
// var trialsLeft;
// var step;
// var action; //used for setInterval
// var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
// $(function(){
    
// //click on start reset button
    
// $("#startreset").click(function(){

//     //we are playing
//     if(playing == true){

//         //reload page
//         location.reload();
//     }else{

//         //we are not playing
//         playing = true; //game initiated

//         //set score to 0
//         score = 0; //set score to 0
//         $("#scorevalue").html(score);

//         //show trials left 
//         $("#trialsLeft").show();
//         trialsLeft = 3;
//         addHearts();

//         //hide game over box
//         $("#gameOver").hide();

//         //change button text to reset game
//         $("#startreset").html("Reset Game");

//         //start sending fruits
//         startAction();
//     }
// });

    
// //slice a fruit
    
// $("#fruit1").mouseover(function(){
//     score++;
//     $("#scorevalue").html(score); //update score
// //    document.getElementById("slicesound").play();
//     $("#slicesound")[0].play();//play sound
    
//     //stop fruit
//     clearInterval(action);
    
//     //hide fruit
//     $("#fruit1").hide("explode", 500); //slice fruit
    
//     //send new fruit
//     setTimeout(startAction, 800);
// });
 
// //functions

// //fill trialLeft box with hearts
    
// function addHearts(){
//     $("#trialsLeft").empty();
//     for(i = 0; i < trialsLeft; i++){
//         $("#trialsLeft").append('<img src="images/heart.png" class="life">');
//     }
// }

// //start sending fruits

// function startAction(){
    
//     //generate a fruit
//     $("#fruit1").show();
//     chooseFruit(); //choose a random fruit
//     $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position
    
//     //generate a random step
//     step = 1+ Math.round(5*Math.random()); // change step
    
//     // Move fruit down by one step every 10ms
//     action = setInterval(function(){
        
//         //move fruit by one step
//         $("#fruit1").css('top', $("#fruit1").position().top + step);                              
    
//         //check if the fruit is too low
//         if($("#fruit1").position().top > $("#fruitsContainer").height()){
//             //check if we have trials left
//             if(trialsLeft > 1 ){
//                 //generate a fruit
//                 $("#fruit1").show();
//                 chooseFruit(); //choose a random fruit
//                 $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

//                 //generate a random step
//                 step = 1+ Math.round(5*Math.random()); // change step
                
//                 //reduce trials by one
//                 trialsLeft --;
                
//                 //populate trialsLeft box
//                 addHearts();
                
//             }else{ // game over
//                 playing = false; //we are not playing anymore
//                 $("#startreset").html("Start Game"); // change button to Start Game
//                 $("#gameOver").show();
//                 $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
//                 $("#trialsLeft").hide();
//                 stopAction();
//             }
//         }
//     }, 10);
// }

// // generate a random fruit

// function chooseFruit(){
//     $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');   
// }

// //Stop dropping fruits

// function stopAction(){
//     clearInterval(action);
//     $("#fruit1").hide();
// }
// });