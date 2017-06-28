var player1= document.querySelector("#p1");
var player2= document.querySelector("#p2");
var p1score= document.querySelector("#p1score");
var p2score= document.querySelector("#p2score");
var reset = document.querySelector("#reset");
var toWin = document.querySelector("#toWinScore");
var winningScoreDisplay =document.querySelector("p span");
var winscore =0;
var gameOver=false;


player1Score =0;
player2Score =0;

toWin.addEventListener("change",function(){
    winningScoreDisplay.textContent=toWin.value;
    winscore=Number(toWin.value);
    reset();
});




player1.addEventListener("click",function(){
    if(!gameOver){
        player1Score++;

        if(player1Score===winscore){
            p1score.classList.add("winner");

            gameOver=true;


        }
            p1score.textContent=player1Score;




    }
});

player2.addEventListener("click",function(){
    if (!gameOver) {
        player2Score++;

        if (player2Score===winscore) {
            p2score.classList.add("winner");

            gameOver=true;

        }
    p2score.textContent=player2Score;

}
});

reset.addEventListener("click",function(){
    player1Score=0;
    player2Score=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p1score.classList.remove("winner");
    p2score.classList.remove("winner");
    gameOver=false;
});


