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

const editPlayer1Button = document.querySelector(".edit-player1-button");
const editPlayer2Button = document.querySelector(".edit-player2-button");

const cancelConfigButton = document.querySelector(".cancel-config-button");

const overlayAsideElement = document.querySelector(".modal");
const backdropElement = document.querySelector(".backdrop");

const formElement = document.querySelector("form");

const playerValidationParagraph = document.querySelector(".config-errors");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);

backdropElement.addEventListener("click", closePlayerConfig);
cancelConfigButton.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
