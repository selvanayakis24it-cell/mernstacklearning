let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn =document.querySelector(".check");
let msg =document.querySelector(".message");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");

let randomVal = Math.trunc(Math.random()*20) + 1;
let curScore = 20;
console.log(randomVal);

checkBtn.addEventListener("click",()=>{
    // 1.Input val
    let val = Number(guess.value);
    console.log(val,typeof val);
    // 2. we have to checkwhether is some value in the input box or not 
    if(!val){
    // 2.1 in message show no value entered
        msg.textContent = "No Number!"
    }else if (val === randomVal){
    // 3. If random value and input value are same
    // 3.1 change body color
    document.body.style.backgroundColor="green";
    // 3.2 show number in guess
    number.textContent = randomVal;
    // 3.3 message show correct number
    msg.textContent = "Correct Number!";
    number.style.width = "30rem";
    // 3.4 change high score value 
    if(curScore > Number(highScore.textContent)){
        highScore.textContent = curScore;
    }
    // 3.4.1 Check whether the score is greater than highscore, thenonly update high score.
    }else if (val>randomVal){
    // 4 random number is greater than input value;
    // 4.1 check score is greater than zero.
        if(curScore>1){
    // 4.1.1 in message show too high
            msg.textContent = "Too high!";
    // 4.1.2 derease the score by 1
            curScore--;
            score.textContent =curScore;
        }else{
            // 4.2 if score is less than or equal to zero 
            // 4.2.1 in message show game ends.
            msg.textContent= "Game Ends!";
            score.textContent = 0;
        }
}else if (val<randomVal){

    if(curScore>1){

        msg.textContent = "Too Low!";
        curScore--;
        score.textContent = curScore;

    }else{

        msg.textContent= "Game Ends!";
        score.textContent=0;
    }
}

});