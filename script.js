let userScore=0;
let compScore=0;
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
 const options=["rock","paper","scissors"];
const randIdx= Math.floor(Math.random()*3);
return options[randIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you win!");
   msg.innerText=`You win!!  your ${userChoice} beats ${compChoice}`;
   msg.style.backgroundColor="green";
   userScore++;
   userScorePara.innerText=userScore;
    }
    else{
        console.log("you lose")
         msg.innerText=`You lost!  ${compChoice} beats your ${userChoice}`
         msg.style.backgroundColor="red";
         compScore++;
         compScorePara.innerText=compScore;
    }
}
const drawGame=()=>{
    console.log("the draw")
     msg.innerText="The Game was draw"
     msg.style.backgroundColor="#081b31";
}
const playGame=(userChoice)=>{
    console.log("user choice is ",userChoice)
    const compChoice=genCompChoice();
     console.log("comp choice is ",compChoice)
     if(compChoice===userChoice){
       drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
         userWin=   compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
           userWin= compChoice==="scissors"?false:true;
        }else{
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}


choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
const userChoice= choice.getAttribute("id");

playGame(userChoice);


    })
})