/* naming variables and caching the DOM */
let myScore = 0;
let score_element = document.getElementById("score")
let question_element= document.getElementById("question")
let answerA =document.getElementById("answer-a");
let answerB =document.getElementById("answer-b");
let answerC =document.getElementById("answer-c");
let answerD =document.getElementById("answer-d");
let question = 1; /* this var keeps count of the question so the main 
function below can act accordingly*/

main (); /* calling the main written below*/

/* this function 'listen' for the user to pick one of the answers. an if 
statement is ran to check which question it is on, so it sends the appropriate
answer to the right question. By default question is 1 but is increased after 
every question*/
function main(){
    answerA.addEventListener('click', function(){
        if (question == 1){
            question1(answerA);}
        else if (question ==2){
            question2(answerA)
        }
        else if (question ==3){
            question3(answerA)
        }
        else if (question ==4){
            question4(answerA)
        }
        else if (question ==5){
            question5(answerA)
        }
        
    })

    answerB.addEventListener('click', function(){
        if (question == 1){
            question1(answerB)}
        else if (question ==2){
            question2(answerB)
        }
        else if (question ==3){
            question3(answerB)
        }
        else if (question ==4){
            question4(answerB)
        }
        else if (question ==5){
            question5(answerB)
        }
    })

    answerC.addEventListener('click', function(){
        console.log("C");
        if (question == 1){
            question1(answerC)}
        else if (question ==2){
            question2(answerC)
        }
        else if (question ==3){
            question3(answerC)
        }
        else if (question ==4){
            question4(answerC)
        }
        else if (question ==5){
            question5(answerC)
        }
    })

    answerD.addEventListener('click', function(){
        if (question == 1){
            question1(answerD)}
        else if (question ==2){
            question2(answerD)
        }
        else if (question ==3){
            question3(answerD)
        }
        else if (question ==4){
            question4(answerD)
        }
        else if (question ==5){
            question5(answerD)
        }
    })
}

/* These functions rewrites the html displayed on the screen,
 so that a new qquestion can be asked*/
function question2html() {
    question_element.innerHTML=" What is the capital of Peru?";
    answerA.innerHTML = "Bangkok";
    answerB.innerHTML = "Dublin";
    answerC.innerHTML = "Tokyo";
    answerD.innerHTML = "Lima";
}

function question3html() {
    question_element.innerHTML="What is the currency of Japan";
    answerA.innerHTML = "Dollar";
    answerB.innerHTML = "Yen";
    answerC.innerHTML = "Pound";
    answerD.innerHTML = "Rupee";
}

function question4html() {
    question_element.innerHTML="What country has the highest population?";
    answerA.innerHTML = "U.S.A.";
    answerB.innerHTML = "Russia";
    answerC.innerHTML = "China";
    answerD.innerHTML = "India";
}

function question5html() {
    question_element.innerHTML="In which US state would you find Fort Knox?";
    answerA.innerHTML = "New York";
    answerB.innerHTML = "Kentucky";
    answerC.innerHTML = "Ohio";
    answerD.innerHTML = "Texas";
}

/* function designed to intake an option of AnswerA- Answr D,
checks with an if statement if it matches the correct answer. */
function question1(ans){
    if (ans == answerC){
        myScore++; /* score is incremented if right */
        question ++; /* question counter incremented*/
        score_element.innerHTML = myScore; /* changes html on screen to show score*/
        question2html(); /* calls function that reqrites question*/
    }
    else{ /* if wrong */
        question++; /* question is still incremented even if wrong*/
        question2html(); /* rewrites question*/
    }
}

/* same as above */
function question2(ans){
    if (ans== answerD){
        myScore++;
        question++;
        score_element.innerHTML=myScore;
        question3html();
    }
    else {
        question++;
        question3html();
    }
}

function question3(ans){
    if (ans== answerB){
        myScore++;
        question++;
        score_element.innerHTML=myScore;
        question4html();
    }
    else {
        question++;
        question4html();
    }
}
function question4(ans){
    if (ans== answerC){
        myScore++;
        question++;
        score_element.innerHTML=myScore;
        question5html();
    }
    else {
        question++;
        question5html();
    }
}

function question5(ans){
    if (ans== answerB){
        myScore++;
        question++
        score_element.innerHTML=myScore;
        end();
    }
    else {
        question++
        end(); /* calls end function written below*/
    }
}

/* this function shows finals score and removes html elements*/
function end(){
    question_element.innerHTML="Final score: " + myScore + ".    Reload the page to try again!";
    answerA.remove(); /* these remvoes the answer elements so the page looks nicer */
    answerB.remove();
    answerC.remove();
    answerD.remove();

}