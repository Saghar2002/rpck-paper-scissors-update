let score =JSON.parse(localStorage.getItem('score')) ||  {
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();

// if(!score){
//   score = {
//     wins:0,
//     losses:0,
//     ties:0
//   };
// }

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(function(){
      const playerMove = pickComputerMove();
      playGame(playerMove);
    } , 1000);
    isAutoPlaying = true;
  }else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';
if (playerMove === 'Scissors'){
if(computerMove === 'Rock'){
result = 'You lose!';
} else if(computerMove === 'Paper'){
result = 'You won!';
} else if(computerMove === 'Scissors'){
result = 'Tie!';
}

} else if(playerMove === 'Paper'){  
if(computerMove === 'Rock'){
result = 'You won!';
} else if(computerMove === 'Paper'){
result = 'Tie!';
} else if(computerMove === 'Scissors'){
result = 'You lose!';
}

 }else if(playerMove  === 'Rock'){
if(computerMove === 'Rock'){
result = 'Tie!';
} else if(computerMove === 'Paper'){
result = 'You lose!';
} else if(computerMove === 'Scissors'){
result = 'You won!';
}
}
if(result === 'You won!'){
score.wins += 1;
}else if(result === 'You lose!'){
score.losses += 1;
}else if(result === 'Tie!'){
score.ties +=1;
}
localStorage.setItem('score' , JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result')
.innerHTML = result;
document.querySelector('.js-moves')
.innerHTML = 
` You
<img src="./images/${playerMove}-emoji.png"
class="move-icon">
<img src="./images/${computerMove}-emoji.png" 
class="move-icon">
Computer`;
}
function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML =`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}



function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';
if (randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'Rock';
}else if(randomNumber >=1/3 && randomNumber < 2/3){
computerMove = 'Paper';
}else if(randomNumber >=2/3 && randomNumber <1){
computerMove = 'Scissors';
}
return computerMove;
}