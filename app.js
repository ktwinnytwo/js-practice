/* A ping pong game where you can choose what score to play to and then keep
track of each players' scores. Whoever wins, their score will be in green,
and the loser in red. Then the buttons will be disabled, and you can press the 
reset button to start again. */


//Create objects for each player:

const player1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let isGameOver = false;
let winningScore = 3;


// Function for updating the score regardless of which player it is
function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            //Add winning and losing color classes
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            //Disable the score buttons
            player1.button.disabled = true;
            player2.button.disabled = true;
        }
        //Show score in the Score text for each player
        player.display.textContent = player.score;
    }

}

// Update the winningScore to whatever is selected in the dropdown
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})

//Adding a Click event to each player button to update the scores  
player1.button.addEventListener('click', function() {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function() {
    updateScores(player2, player1);
})

//Reset button will reload the page and reset everything
resetButton.addEventListener('click', function() {
    window.location.reload();
})




/* 

ALTERNATIVE RESET BUTTON FUNCTION:

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

*/
