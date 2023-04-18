document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const resetButton = document.getElementById('reset');
    const playerSelect = document.getElementById('player-select');
    const playerXScore = document.getElementById('player-x-score');
    const playerOScore = document.getElementById('player-o-score');
    let currentPlayer = 'X';
    let isAgainstComputer = false;
    const score = {
        X: 0,
        O: 0
    };

    squares.forEach(square => {
        square.addEventListener('click', () => {
            if (square.textContent !== '') {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer === 'X' ? 'x-symbol' : 'o-symbol');

            if (checkWin()) {
                alert(currentPlayer + ' wins!');
                resetBoard();
                return;
            }

            if (checkTie()) {
                alert('It\'s a tie!');
                resetBoard();
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            if (isAgainstComputer && currentPlayer === 'O') {
                playAgainstComputer();
            }
        });
    });

    resetButton.addEventListener('click', resetBoard);

    playerSelect.addEventListener('change', () => {
        isAgainstComputer = playerSelect.value === 'computer';
        if (isAgainstComputer && currentPlayer === 'O') {
            playAgainstComputer();
        }
    });

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
                return true;
            }
        });

        return isWinning;
    }

    function checkTie() {
        return Array.from(squares).every(square => {
            return square.textContent !== '';
        });
    }

    function resetBoard() {
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('x-symbol', 'o-symbol');
        });
        currentPlayer = 'X';
    }

    function playAgainstComputer() {
        const availableSquares = Array.from(squares).filter(square => square.textContent === '');
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        const selectedSquare = availableSquares[randomIndex];
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

        currentPlayer = 'X';
    }

    function updateScore() {
        playerXScore.textContent = score.X;
        playerOScore.textContent = score.O;
    }
});