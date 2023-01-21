function openPlayerConfig(event) {
  editedPlayer = parseInt(event.target.dataset.playerid);
  overlayAsideElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  overlayAsideElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  playerValidationParagraph.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("player-name").trim();

  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    playerValidationParagraph.textContent = "Please enter a name";
    return;
  }

  const updatedPlayerNameElement = document.getElementById("player" + editedPlayer + "-data");
  updatedPlayerNameElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
