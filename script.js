/*
    let score={
      wins:0,
      losses:0,
      tie:0
    };
*/
//Instead of using below code after setItem to localStorage
let score = JSON.parse(localStorage.getItem('score'))
  ||
//Creating Object where Object removed from localStorage 
{
  wins: 0,
  losses: 0,
  tie: 0
};

/*
  if (!null){
    score={
     wins:0,
     losses:0,
     tie:0
    }
  }
*/

function playGame(playerMove) {
  let computerMove = computerGame();
  let result = '';

  //Rock
  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie'
    }
    else if (computerMove === 'Paper') {
      result = 'You lose'
    }
    else if (computerMove === 'Scissors') {
      result = 'You win'
    }
  }
  //Paper
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win'
    }
    else if (computerMove === 'Paper') {
      result = 'Tie'
    }
    else if (computerMove === 'Scissors') {
      result = 'You lose'
    }
  }
  //Scissors
  else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose'
    }
    else if (computerMove === 'Paper') {
      result = 'You win'
    }
    else if (computerMove === 'Scissors') {
      result = 'Tie'
    }
  }

  //For counts

  if (result === 'You win') {
    score.wins += 1;
  }
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.tie += 1;
  }



  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.game-result').innerHTML = result;
  document.querySelector('.game-play').innerHTML = `You Picked <img class="icons bg" src="/Excercise/RockPaperScissors/thumbnail/${playerMove}.svg" alt="${playerMove}">  Computer Picked <img class="icons bg" src="/Excercise/RockPaperScissors/thumbnail/${computerMove}.svg" alt="${computerMove}">`;

  //Updating  Score Each Time
  updateScore()




}
function computerGame() {
  let computerMove = '';
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}
function updateScore() {
  document.querySelector('.scoreUpdates').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;
}

