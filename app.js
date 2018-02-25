var score, scoreRound, activePlayer, dice, gameisPlaying, previousDice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gameisPlaying) {
        
        var dice = Math.floor(Math.random() * 6 + 1);
        console.log(dice);

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if (previousDice !== 6 && dice !==1) {
                scoreRound += dice;
                document.querySelector('#current-' + activePlayer).textContent = scoreRound;
                previousDice = dice;
        } else if (dice !== 6 && dice !==1) {
                scoreRound += dice;
                document.querySelector('#current-' + activePlayer).textContent = scoreRound;
                previousDice = dice;
        } else if (dice === 6 && previousDice === 6) {
            score[activePlayer] = 0;
            var globalScore = document.getElementById('score-' + activePlayer);
            globalScore.textContent = score[activePlayer];
            nextPlayer(); 
        } else {
            nextPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gameisPlaying) {
    
        score[activePlayer] += scoreRound;
        var globalScore = document.getElementById('score-' + activePlayer);
        globalScore.textContent = score[activePlayer];

        if (score[activePlayer] >= 100) {

            var playerName = document.getElementById('name-' + activePlayer);
            playerName.textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');  
            gameisPlaying = false;

        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    scoreRound = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    
    score = [0, 0];
    scoreRound = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    gameisPlaying = true;
    previousDice = 0;


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

};






