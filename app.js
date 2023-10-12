const p1Button = document.querySelector(`#p1Button`);
const p2Button = document.querySelector(`#p2Button`);
const resetButton = document.querySelector(`#Reset`);
const P1Display = document.querySelector(`#P1Display`);
const P2Display = document.querySelector(`#P2Display`);
const winningScoreSelect = document.querySelector(`#playto`);

let P1Score = 0;
let P2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener(`click`,function(){
    if(!isGameOver){
        P1Score += 1;
    if(P1Score === winningScore){
        isGameOver = true ;
        P1Display.classList.add(`winner`);
        P2Display.classList.add(`loser`);
    }
   P1Display.textContent = P1Score;
    }
   })

   p2Button.addEventListener(`click`,function(){
    if(!isGameOver){
        P2Score += 1;
    if(P2Score === winningScore){
        isGameOver = true ;
        P2Display.classList.add(`winner`);
        P1Display.classList.add(`loser`);
    }
   P2Display.textContent = P2Score;
    }
   })

winningScoreSelect.addEventListener(`change`,function(){
    winningScore = parseInt(this.value);
    reset();
})


resetButton.addEventListener(`click`,reset)

function reset (){
    isGameOver = false;
    P1Score = 0;
    P2Score = 0;
    P1Display.textContent = 0;
    P2Display.textContent = 0;
    P1Display.classList.remove(`winner`,`loser`);
    P2Display.classList.remove(`winner`,`loser`);
}