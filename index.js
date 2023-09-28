let score = JSON.parse(localStorage.getItem('score')) || { //when the page is loaded, set the score to the value on local storage
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement(); //updates the score


function ResetScore(){ //sets the score back to zero
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function updateScoreElement(){ //is called whenever the score needs to be updated
    document.querySelector('.js-score').innerHTML = 
`Wins: ${score.wins}, Losses: ${score.losses}, Ties ${score.ties}`; //edits the score element in the html to reflect the new score
}


function pickComputerMove(){ //is called when the player selects their move
    const randomNumber = Math.random(); //create random number between 0 and 1
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){ //assign the computer to move based on the random number
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}


function playGame(playerMove){ //is called when the player selects their move
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'scissors'){ //calculates the result - win, lose or draw based on the player and computer moves
        if(computerMove === 'rock'){
            result = 'You Lose';
        }
        else if(computerMove === 'paper'){
            result = 'You Win';
        }
        else if(computerMove === 'scissors'){
            result = 'Tie';
        }
    }
    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You Win';
        }
        else if(computerMove === 'paper'){
            result = 'Tie';
        }
        else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie';
        }
        else if(computerMove === 'paper'){
            result = 'You Lose';
        }
        else if(computerMove === 'scissors'){
            result = 'You Win';
        }
    }
        if(result === 'You Win'){
            score.wins += 1;
        } else if(result === 'You Lose'){
            score.losses += 1;
        } else if(result === 'Tie'){
            score.ties += 1;
        }

        localStorage.setItem('score', JSON.stringify(score)); //saves the score on local storage so that even when the page is refreshed, the score does not reset

        updateScoreElement(); //updates the score

        document.querySelector('.js-result').innerHTML = result; //updates the result element in the html 
        document.querySelector('.js-moves').innerHTML = `You played: ${playerMove}, Computer played: ${computerMove}`; //updates the moves element in the html to show which moves were played

        
}
