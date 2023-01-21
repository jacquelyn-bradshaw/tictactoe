let editedPlayer = 0;

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

const editPlayer1Button = document.getElementById("edit-player1-button");
const editPlayer2Button = document.getElementById("edit-player2-button");

const cancelConfigButton = document.getElementById("cancel-config-button");

const overlayAsideElement = document.getElementById("modal-element");
const backdropElement = document.getElementById("backdrop-element");

const formElement = document.getElementById("config-form");

const playerValidationParagraph = document.getElementById("config-errors");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

backdropElement.addEventListener("click", closePlayerConfig);
cancelConfigButton.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
