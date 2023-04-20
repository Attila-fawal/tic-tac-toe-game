
# Tic Tac Toe Game

This project is a browser-based Tic-Tac-Toe game with single-player and two-player modes. The user can play against another person or against the computer, which uses a minimax algorithm to make its moves. The game also features a timer for each player's turn, and it keeps track of the score for both players.

. By interacting with this Tic-Tac-Toe game users can learn The Tic-Tac-Toe game rules so they can apply it to learn valuable skills and concepts by playing the game, including strategic thinking, decision-making, time management. or just wanna have a fun 

![Screenshot (38)](https://user-images.githubusercontent.com/127791713/233472990-03053e1d-9756-4851-8365-282f1ae79d58.png)


## Features
### Header
The Header features top of the page shows the game name with game symbol so it clearly tells what game they are playing.

![header](https://user-images.githubusercontent.com/127791713/233330055-71484dde-f10d-4f93-aee2-0175d37c809a.png)
### Game bord 
The board is a 3x3 clickable when it's clicked highlight with X when is the X player turns or highlights with O when is the O player turns and if there is a winning sequence highlights with the winning player colour. 

![Screenshot (36)](https://user-images.githubusercontent.com/127791713/233469136-5d684681-033b-483f-9eb1-5bb955ff9af2.png)

### Pop up message
When there is a winner or the game is tie the pop up message shows up and restart the game with the timer.

![Screenshot (31)](https://user-images.githubusercontent.com/127791713/233336149-00a524fd-c851-4f3c-a503-f744fee994ac.png)

### Scoreboard
The scoreboard have the same colors as X & O every time there is a winner the scoreboards keep track and add value.

![Screenshot (30)x](https://user-images.githubusercontent.com/127791713/233339544-293873eb-d22f-4b2f-b660-15246811571b.png)

### Timer
The timer start from 15 seconds for each player and if the user play against the computer
and the time is up the computer will move again.

![Screenshot (30)xx](https://user-images.githubusercontent.com/127791713/233339350-13f93239-0c4e-4ffb-8fd7-b65f7d7bf542.png)

### Select playstyle
The select play style you can choose if you want to play against another user or against the computer.

![Screenshot (32)](https://user-images.githubusercontent.com/127791713/233340783-57fb09c9-557b-4315-a63f-9e3b6d9b9c19.png)

### Reset button
The reset button you can use it to restart the game board the timer and the scoreboard every time gets clicked.

![Screenshot (30)](https://user-images.githubusercontent.com/127791713/233341465-87fc12a3-1e45-42bd-a5f5-a374271f0cc7.png)

### Footer
The Footer it's a brief introduction for the game rules.

![Screenshot (28)](https://user-images.githubusercontent.com/127791713/233342136-cb66a168-18ed-4464-87f8-9afbaa7123a2.png)

## How to Play
By default, the game starts in two-player mode. Player X starts the game.
If you want to play against the computer, change the player selection option to "Computer."
Click on an empty square to make a move.
The timer counts down from 15 seconds for each player's turn. If time runs out, the turn switches to the other player or the computer.
The game continues until there is a winner or a tie.
The winning combination will be highlighted on the board and on The pop up message.
The score for each player is displayed below the board.
To reset the game board and the scoreboard, click the "Reset" button.

## Implementation Details
The game is implemented using JavaScript, with event listeners for user interactions such as selecting squares, resetting the board, and changing player options. The game logic includes functions for checking win conditions, checking for a tie, handling timers, and updating scores. In single-player mode, the computer opponent utilizes a minimax algorithm to determine its moves, with a configurable probability of making random moves for varying difficulty levels.

## Testing
I tested the game is working on different browsers and different size screens and it is responsive.

![Screenshot (34)](https://user-images.githubusercontent.com/127791713/233452739-7c1d0f51-613d-4274-bbfa-3feee5841b13.png)

## Bugs fix
. When I testing the game on small screens the X and the O was bigger then the square itself so it stretching it out so I needed to use media query for the symbols and for the squares.

. The minimax algorithm was unbeatable so not very enjoyable for the users so I needed to add random move function with random move probability so it's adjustable at this stage it set at 30%.

## Unfixed Bugs
 no.

## Features left to implement
A button for the users with the name difficulty level so they can adjust the random move probability so they can change the game difficulty level.

## Validator Testing
. html no errors with W3C HTML Validator testing.

![Screenshot (23)](https://user-images.githubusercontent.com/127791713/233452237-18c67932-c277-4229-bd6f-cb7dffd7a368.png)

. css no errors with W3C CSS Validator (Jigsaw) testing.

![Screenshot (24)](https://user-images.githubusercontent.com/127791713/233452093-82a02149-e33d-4c77-b25e-8bcc0bb55ea2.png)


. javascript no errors with JSHint JavaScript Validator.

Metrics:
There are 22 functions in this file.
Function with the largest signature take 2 arguments, while the median is 0.
Largest function has 23 statements in it, while the median is 4.5.
The most complex function has a cyclomatic complexity value of 12 while the median is 2.

![Screenshot (22)](https://user-images.githubusercontent.com/127791713/233452406-dd464c59-6300-451a-b89e-87bdc8303219.png)

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:

.In the GitHub repository, navigate to the Settings tab
.From the source section drop-down menu, select the Main Branch
.Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
.The live link can be found here: https://attila-fawal.github.io/tic-tac-toe-game/

## Credits
google fonts.

www.pngwing.com for the logo image.

## Minimax Algorithm by John von Neumann

The minimax algorithm is a decision-making algorithm used in turn-based, two-player games. The algorithm helps determine the optimal move for a player by simulating all possible moves and their outcomes, assuming that both players play optimally.

In this project, the minimax algorithm is implemented to provide an AI opponent for the game of [Tic Tac Toe]. The AI makes decisions based on the game state and the evaluation function, which calculates the desirability of a particular game state for the AI player.


