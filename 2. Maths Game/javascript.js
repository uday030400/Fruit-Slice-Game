var playing = false;
var score;
var action;
var timeremaining;
var correctAns;
var operators = ['x','+','-'];
var operator;
// if we click on the start/reset button
document.getElementById("startReset").onclick = function () {
    // if we are playing
    if (playing == true) {
        // reload page    
        location.reload();
    } else {// if we are not playing

        // change mode to playing
        playing = true;
        // set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;

        // show countdown
        show("countdown");
        timeremaining = 60;
        document.getElementById("counter").innerHTML = timeremaining;

        // hide gameover box
        hide("gameOver");
        hide("WrongAns");

        // change button to reset game 
        document.getElementById("startReset").innerHTML = "Reset Game";

        // start countdown
        startCountdown();

        // generate new question
        generateQA();
    }
}

function startCountdown() {// reduce time by 1 sec in loops
    action = setInterval(() => {
        timeremaining -= 1;
        document.getElementById("counter").innerHTML = timeremaining;
        if (timeremaining == 0) {// if timeleft?
            // yes->continue
            // no->gameover
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML =
                "<p>Game Over!</p><p>Your score is " + score + ".</p>";

            hide("countdown");
            document.getElementById("startReset").innerHTML = "Re-start Game";
            playing = false;

            hide("correct");
            hide("WrongAns");
        }
    }, 1000);
}
function stopCountdown() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function generateQA() {
    var i = Math.round(2 * Math.random());
    operator = operators[i];
    switch (operator) {
        case 'x':
            var x = Math.round(25 * Math.random());
            var y = Math.round(25 * Math.random());
            correctAns = x * y;

            document.getElementById("question").innerHTML = x + "x" + y;
            var correctPos = 1 + Math.round(3 * Math.random());

            // fill one box with the correct ans
            document.getElementById("box" + correctPos).innerHTML = correctAns;

            // fill other boxes

            var answers = [correctAns];
            for (i = 1; i < 5; i++) {
                if (i != correctPos) {
                    var wrongAnswer;
                    do {
                        wrongAnswer = (Math.round(29 * Math.random())) * (Math.round(29 * Math.random()));
                    }
                    while (answers.indexOf(wrongAnswer) > -1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
            break;

        case '+':
            var x = Math.round(25 * Math.random());
            var y = Math.round(25 * Math.random());
            correctAns = x + y;

            document.getElementById("question").innerHTML = x + "+" + y;
            var correctPos = 1 + Math.round(3 * Math.random());

            // fill one box with the correct ans
            document.getElementById("box" + correctPos).innerHTML = correctAns;

            // fill other boxes

            var answers = [correctAns];
            for (i = 1; i < 5; i++) {
                if (i != correctPos) {
                    var wrongAnswer;
                    do {
                        wrongAnswer = (Math.round(29 * Math.random())) + (Math.round(29 * Math.random()));
                    }
                    while (answers.indexOf(wrongAnswer) > -1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
            break;

        case '-':
            var x = Math.round(25 * Math.random());
            var y = Math.round(25 * Math.random());
            correctAns = x - y;

            document.getElementById("question").innerHTML = x + "-" + y;
            var correctPos = 1 + Math.round(3 * Math.random());

            // fill one box with the correct ans
            document.getElementById("box" + correctPos).innerHTML = correctAns;

            // fill other boxes

            var answers = [correctAns];
            for (i = 1; i < 5; i++) {
                if (i != correctPos) {
                    var wrongAnswer;
                    do {
                        wrongAnswer = (Math.round(29 * Math.random())) - (Math.round(29 * Math.random()));
                    }
                    while (answers.indexOf(wrongAnswer) > -1)
                    document.getElementById("box" + i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
                }
            }
            break;
        }
}

// if we click on answer box
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        // if we are playing
        if (playing == true) {
            // yes
            // increase score
            // show correct box
            // generate new question
            if (this.innerHTML == correctAns) {
                // correct answer
                // increase score by 1
                score++;
                document.getElementById("scoreValue").innerHTML = score;

                // hide wrong box and show correct box
                hide("WrongAns");
                show("correct");
                setTimeout(() => {
                    hide("correct");
                }, 1000);

                // generate new question
                generateQA();

            }
            else {// no
                // show try again box
                hide("correct");
                show("WrongAns");
                setTimeout(() => {
                    hide("WrongAns");
                }, 1000);
                stopCountdown();
                show("gameOver");
                document.getElementById("gameOver").innerHTML =
                    "<p>Game Over!</p><p>Your score is " + score + ".</p>";

                hide("countdown");
                document.getElementById("startReset").innerHTML = "Re-start Game";
                playing = false;
                hide("correct");
            }
        }
    }
}


