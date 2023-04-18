document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square');
    const resetButton = document.getElementById('reset');
    const playerSelect = document.getElementById('player-select');
    let currentPlayer = 'X';
    let isAgainstComputer = false;

    // Add event listeners to each square
    squares.forEach(square => {
        square.addEventListener('click', () => {
            // Check if the square is already marked
            if (square.textContent !== '') {
                return;
            }

            // Mark the square with the current player's symbol
            square.textContent = currentPlayer;

            // Check if the current player has won
            if (checkWin()) {
                alert(currentPlayer + ' wins!');
                resetBoard();
                return;
            }

            // Check if the game is a tie
            if (checkTie()) {
                alert('It\'s a tie!');
                resetBoard();
                return;
            }

            // Switch to the other player's turn
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // If playing against the computer and it's the computer's turn, call the playAgainstComputer function
            if (isAgainstComputer && currentPlayer === 'O') {
                playAgainstComputer();
            }
        });
    });

    // Add event listener to reset button
    resetButton.addEventListener('click', resetBoard);

    // Add event listener to player select dropdown menu
    playerSelect.addEventListener('change', () => {
        isAgainstComputer = playerSelect.value === 'computer';
        if (isAgainstComputer && currentPlayer === 'O') {
            playAgainstComputer();
        }
    });

    // Function to check if the current player has won
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

        return winConditions.some(condition => {
            return condition.every(index => {
                return squares[index].textContent === currentPlayer;
            });
        });
    }

    // Function to check if the game is a tie
    function checkTie() {
        return Array.from(squares).every(square => {
            return square.textContent !== '';
        });
    }

    // Function to reset the board
    function resetBoard() {
        squares.forEach(square => {
            square.textContent = '';
        });
        currentPlayer = 'X';
    }

    // Function to play against the computer
    function playAgainstComputer() {
        // Get a list of available squares
        const availableSquares = Array.from(squares).filter(square => square.textContent === '');

        // Select a random square from the available squares
        const randomIndex = Math.floor(Math.random() * availableSquares.length);
        const selectedSquare = availableSquares[randomIndex];

        // Mark the selected square with the computer's symbol
        selectedSquare.textContent = 'O';

        // Check if the computer has won
        if (checkWin()) {
            alert('Computer wins!');
            resetBoard();
            return;
        }

        // Check if the game is a tie
        if (checkTie()) {
            alert('It\'s a tie!');
            resetBoard();
            return;
        }

        // Switch to the other player's turn
        currentPlayer = 'X';
    }
});