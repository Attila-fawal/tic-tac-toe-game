// Wait for the DOM to finish loading before running the code 
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const squares = document.querySelectorAll('.square');
    const resetButton = document.getElementById('reset');
    const playerSelect = document.getElementById('player-select');
    const playerXScore = document.getElementById('player-x-score');
    const playerOScore = document.getElementById('player-o-score');
    const timerElement = document.getElementById('timer');
    let countdownInterval;

    // Variables
    let currentPlayer = 'X';
    let isAgainstComputer = false;
    const score = {
        X: 0,
        O: 0
    };

    // event listeners for each square
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.textContent !== '' || (isAgainstComputer && currentPlayer === 'O')) {
                return;
            }
            clearInterval(countdownInterval);

            // Update square with the current player's symbol
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer === 'X' ? 'x-symbol' : 'o-symbol');

            // Check for win and update scores
            if (checkWin()) {
                setTimeout(() => {
                    alert(currentPlayer + ' wins!');
                    resetBoard();
                }, 100);
                return;
            }

            // Check for a tie
            if (checkTie()) {
                alert('It\'s a tie!');
                resetBoard();
                return;
            }

            // Switch current player
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // If playing against computer and it's computer's turn, execute computer move
            if (isAgainstComputer && currentPlayer === 'O') {
                playAgainstComputer();
            }
            if (!checkWin() && !checkTie()) {
                startTimer();
            }

        });
    });

    // event listener for reset button
    resetButton.addEventListener('click', () => resetBoard(true));

    // event listener for player selection
    playerSelect.addEventListener('change', () => {
        isAgainstComputer = playerSelect.value === 'computer';
        if (isAgainstComputer && currentPlayer === 'O') {
            playAgainstComputer();
        }
    });

    // checkWin function evaluates the current game state and determines if there is a winner
    function checkWin() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const isWinning = winConditions.some(condition => {
            const isConditionMet = condition.every(index => {
                return squares[index].textContent === currentPlayer;
            });

            if (isConditionMet) {
                score[currentPlayer]++;
                updateScore();

                // Highlight the winning squares
                condition.forEach(index => {
                    squares[index].classList.add('winning-square', currentPlayer === 'X' ? 'x-score-color' : 'o-score-color');
                });

                return true;
            }
        });

        return isWinning;
    }

    // Reset the game board
    function resetBoard(resetScores = false) {
        clearInterval(countdownInterval);
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('x-symbol', 'o-symbol', 'winning-square', 'x-score-color', 'o-score-color');
        });
        currentPlayer = 'X';

        if (resetScores) {
            score.X = 0;
            score.O = 0;
            updateScore();
        }

        startTimer();
    }

    // Check if the game is a tie
    function checkTie() {
        return Array.from(squares).every(square => {
            return square.textContent !== '';
        });
    }

    // startTimer function begins the countdown for each player's turn
    function startTimer() {
        clearInterval(countdownInterval);
        let timeLeft = 15;
        timerElement.textContent = timeLeft;

        countdownInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (isAgainstComputer && currentPlayer === 'O') {
                    playAgainstComputer();
                } else {
                    startTimer();
                }
            }
        }, 1000);

        if (isAgainstComputer && currentPlayer === 'O') {
            playAgainstComputer();
        }
    }

    // Evaluate the board to determine the score for the computer's move
    function evaluateBoard() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        // Check each win condition to see if there's a winner
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            const squareA = squares[a].textContent;
            const squareB = squares[b].textContent;
            const squareC = squares[c].textContent;

            if (squareA !== '' && squareA === squareB && squareA === squareC) {
                return squareA === 'O' ? 10 : -10;
            }
        }

        return 0;
    }

    // Use the minimax algorithm to find the best move for the computer
    function minimax(depth, isMaximizingPlayer) {
        const score = evaluateBoard();

        if (score === 10) return score - depth;
        if (score === -10) return score + depth;

        if (checkTie()) return 0;

        if (isMaximizingPlayer) {
            let bestVal = -Infinity;

            // Check each possible move on the board
            for (let i = 0; i < squares.length; i++) {
                if (squares[i].textContent === '') {
                    squares[i].textContent = 'O';
                    bestVal = Math.max(bestVal, minimax(depth + 1, !isMaximizingPlayer));
                    squares[i].textContent = '';
                }
            }
            return bestVal;
        } else {
            let bestVal = Infinity;

            // Check each possible move on the board
            for (let i = 0; i < squares.length; i++) {
                if (squares[i].textContent === '') {
                    squares[i].textContent = 'X';

                    bestVal = Math.min(bestVal, minimax(depth + 1, !isMaximizingPlayer));
                    squares[i].textContent = '';
                }
            }
            return bestVal;
        }
    }

    // Find the best move for the computer
    function findBestMove() {
        let bestVal = -Infinity;
        let bestMove = -1;

        // Check each possible move on the board
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].textContent === '') {
                squares[i].textContent = 'O';
                const moveVal = minimax(0, false);
                squares[i].textContent = '';

                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove = i;
                }
            }
        }

        return bestMove;
    }

    // playAgainstComputer function simulates the computer's turn in a game
    function playAgainstComputer() {
        const bestMove = findBestMove();
        const selectedSquare = squares[bestMove];
        selectedSquare.textContent = 'O';
        selectedSquare.classList.add('o-symbol');

        if (checkWin()) {
            alert('Computer wins!');
            resetBoard();
            return;
        }

        if (checkTie()) {
            alert('It\'s a tie!');
            resetBoard();
            return;
        }

        // If the game is still ongoing, switch to the player's turn and start the timer
        currentPlayer = 'X';
        startTimer();
    }

    // Updates the score for both players on the screen
    function updateScore() {

        // Update the text content of the score elements to reflect the current score
        playerXScore.textContent = `Player X: ${score.X}`;
        playerOScore.textContent = `Player O: ${score.O}`;
    }
})