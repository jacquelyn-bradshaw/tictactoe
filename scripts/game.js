function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    playerNameAlertModal.style.display = "block";
    return;
  }
  activeGameSection.style.display = "block";
}