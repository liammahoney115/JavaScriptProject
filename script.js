let myScore = 0;
let score_element = document.getElementById("score")
let question_element= document.getElementById("question")
let answerA =document.getElementById("answer-a");
let answerB =document.getElementById("answer-b");
let answerC =document.getElementById("answer-c");
let answerD =document.getElementById("answer-d");
let question = 1;

main ();

function main(){
    answerA.addEventListener('click', function(){
        console.log("A");
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
        console.log("B")
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
        console.log("D")
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

function question1(ans){
    if (ans == answerC){
        myScore++;
        question ++;
        console.log(myScore);
        score_element.innerHTML = myScore;
        question2html();
    }
    else{
        question++
        question2html();
    }
}

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
        end();
    }
}