const editPlayer1Button = document.querySelector(".edit-player1-button");
const editPlayer2Button = document.querySelector(".edit-player2-button");

const overlayAsideElement = document.querySelector(".modal");
const backdropElement = document.querySelector(".backdrop");

editPlayer1Button.addEventListener("click", openPlayerConfig);
editPlayer2Button.addEventListener("click", openPlayerConfig);
