let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  },
];

let gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//config variables
const editPlayer1Button = document.getElementById("edit-player1-button");
const editPlayer2Button = document.getElementById("edit-player2-button");

const cancelConfigButton = document.getElementById("cancel-config-button");

const overlayAsideElement = document.getElementById("modal-element");
const backdropElement = document.getElementById("backdrop-element");

const formElement = document.getElementById("config-form");

const playerValidationParagraph = document.getElementById("config-errors");

//active game variables
const startGameButton = document.getElementById("start-game");
const activeGameSection = document.getElementById("game-started");
const playerNameAlertModal = document.getElementById("player-name-alert");

const playerTurnElement = document.getElementById("active-player-name-element");

const gameBoardElements = document.querySelectorAll("#game-board-element li");

const gameOverArticle = document.getElementById("game-over-element");
const gameOverHeading = document.getElementById("game-over-heading");

//config event listeners
editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

backdropElement.addEventListener("click", closePlayerConfig);
cancelConfigButton.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

//active game listeners
startGameButton.addEventListener("click", startNewGame);

for (const gameBoardElement of gameBoardElements) {
  gameBoardElement.addEventListener("click", selectGameField);
}