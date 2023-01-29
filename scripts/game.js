let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const playerTurnElement = document.getElementById("active-player-name-element");

const gameOverArticle = document.getElementById("game-over-element");
const gameOverHeading = document.getElementById("game-over-heading");

function startNewGame() {
  const activeGameSection = document.getElementById("game-started");
  if (players[0].name === "" || players[1].name === "") {
    playerNameAlertModal.style.display = "block";
    return;
  }

  resetGameStatus();

  activeGameSection.style.display = "block";
  playerTurnElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0
}

function selectGameField(event) {
  if (gameIsOver) {
    return;
  }
  const column = parseInt(event.target.dataset.col);
  const row = parseInt(event.target.dataset.row);

  if (gameData[row][column] > 0) {
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  
  gameData[row][column] = activePlayer + 1;
  
  const winnerId = checkForGameOver();
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  
  currentRound++;
  switchPlayer();
  playerTurnElement.textContent = players[activePlayer].name;
}

function checkForGameOver() {
  // Checking the rows for equality
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[i][0] > 0 && 
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
  }
  // Checking the columns for equality
  for (let i = 0; i <= 2; i++) {
    if (
      gameData[0][i] > 0 && 
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }
  }
  // Checking the diagonals for equality
  if (
    gameData[0][0] > 0 && 
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }

  if (
    gameData[0][2] > 0 && 
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
    ) {
      return gameData[0][2];
    }
    if (currentRound === 9) {
      return -1;
    }
  return 0;
}

function endGame(winnerId) {
  const winningPlayerName = document.getElementById("winning-player-name");
  gameIsOver = true;
  gameOverArticle.style.display = "block";
  winnerId > 0 ? winningPlayerName.textContent = players[winnerId - 1].name : gameOverHeading.textContent = "It's a draw!"
}

function resetGameStatus() {
  gameOverHeading.innerHTML = "You won, <span class=\"winning-player\" id=\"winning-player-name\"></span>!";
  gameOverArticle.style.display = "none";
  activePlayer = 0;
  currentRound = 1;
  gameIsOver = false;
  gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (const gameBoardElement of gameBoardElements) {
    gameBoardElement.classList.remove("disabled");
    gameBoardElement.textContent = "";
  }
}
