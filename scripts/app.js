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

//config variables
const editPlayer1Button = document.getElementById("edit-player1-button");
const editPlayer2Button = document.getElementById("edit-player2-button");

const backdropElement = document.getElementById("backdrop-element");

const cancelConfigButton = document.getElementById("cancel-config-button");

const formElement = document.getElementById("config-form");

//active game variables
const startGameButton = document.getElementById("start-game");

const playerNameAlertModal = document.getElementById("player-name-alert");

const gameBoardElements = document.querySelectorAll("#game-board-element li");

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