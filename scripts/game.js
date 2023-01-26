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
  const column = parseInt(event.target.dataset.col);
  const row = parseInt(event.target.dataset.row);

  if (gameData[row][column] > 0) {
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  
  gameData[row][column] = activePlayer + 1;
  
  const winnerId = checkForGameOver();
  console.log(winnerId);
  
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
