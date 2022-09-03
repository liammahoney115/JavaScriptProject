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