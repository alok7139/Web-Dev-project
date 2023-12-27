let userscore=0;
let compscore=0;

const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");

const generatecomputerchoice =()=>{
    const option = ["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
   // rock paper scissors

};

const drawgame=()=>{
//    console.log("Game was draw.")
   msg.innerText = "Game was Draw, Play again!";
   msg.style.backgroundColor = "#081b31";

  
};

const showwinner=(userwin,choiceid,computerchoice)=>{
    if(userwin){
        userscore++;
        userscorep.innerText=userscore;
        msg.innerText = `You Win, Your ${choiceid} beats ${computerchoice}!`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compscorep.innerText=compscore;
        msg.innerText = `You lose, ${computerchoice} beats Your ${choiceid}!`;
        msg.style.backgroundColor = "red";

    }
}

const playgame=(choiceid)=>{
    // console.log("user choice",choiceid);
    //generate computer -> modular programming
    const computerchoice =generatecomputerchoice();
    // console.log("comp choice =", computerchoice);

    if(choiceid === computerchoice){
        //draw 
        drawgame();
    }
    else{
        let userwin=true;
        if(choiceid === "rock"){
            // scissors paper
            userwin=computerchoice === "paper" ? false:true;
        }
        else if(choiceid === "paper"){
            // scissors rock
            userwin=computerchoice === "scissors" ? false:true;
        }
        else{
            // paper rock
            userwin = computerchoice === "rock" ?false:true;
        }
        showwinner(userwin,choiceid,computerchoice);
    }


};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
       playgame(choiceid);

    });
});