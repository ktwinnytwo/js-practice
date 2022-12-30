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
const winner = document.querySelector('#playto');
let isGameOver = false;
let winningScore = 3;


// Function for updating the score regardless of which player it is
function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
        }
        player.display.textContent = player.score;
    }

}

player1.button.addEventListener('click', function() {
    updateScores(player1, player2);
})

player2.button.addEventListener('click', function() {
    updateScores(player2, player1);
})



























/* 

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

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
