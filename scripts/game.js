function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    playerNameAlertModal.style.display = "block";
    return;
  }
  activeGameSection.style.display = "block";
  playerTurnElement.textContent = players[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function selectGameField(event) {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  switchPlayer();
  playerTurnElement.textContent = players[activePlayer].name;
}
