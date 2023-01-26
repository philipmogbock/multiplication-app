// define variables
// const score = document.getElementsByClassName("score") [0];
//random number generator (between 1 and 10) parsed to integer
const num1=parseInt(Math.random()*10);
const num2=parseInt(Math.random()*10);
const input = document.getElementsByClassName("input") [0];
const question = document.getElementsByClassName("question") [0];
const scoreMsg = document.getElementsByClassName("score") [0];
//set score to value in local storage
let score = parseInt(localStorage.getItem("score"));

//manipulate the shown text so that each number corresponds to a randomly generated number use "`" not "("/')"
question.innerText = `What is ${num1} multiplied by ${num2}?`;

//change the value of score to match whats in local storage
scoreMsg.innerText = `Score:${score}`;

//need to define variable for correct answer for later comparison
const correctAns= num1*num2;

// store form which contanins inputted value in a variable, 
const formValue = document.getElementsByClassName("form") [0];

// everytime someone clicks submit, get the input using event listener and form
formValue.addEventListener("submit", ()=>{
    //parse as int because user input is stored as a string
    const userAns = parseInt(input.value);
    //compare user answer to correct answer
    if (userAns===correctAns){
        score++;
        localStorageUpdate();
    }
    else if (score > 0) {
        score--;
        localStorageUpdate();
    }
    else {
        score=0 ;
        localStorageUpdate();
    }

})

// need to save the value of score in local Storage, if not it refreshes every time we click submit
function localStorageUpdate(){
    localStorage.setItem("score", JSON.stringify(score));
}


//when page refreshed, use a random number generator to generate the 2 random numbers
//assign those numbers to their corresponding index in the sentence

//store answer of multiplication in a variable
//store score in a variable 
//once submit buttom is clicked, compare inputted value with whats stored in variable
    // if correct increment score by 1
    // if wrong decrement score by 1
