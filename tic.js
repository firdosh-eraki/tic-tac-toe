const cells = document.querySelectorAll(".cell");

let currentPlayer = "X";
let gameState = [",", ",", ",", ",", ",", ",", ",", ",", ","];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function handleClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;
  if (gameState[index] != "," || checkWin()) {
    return;
  }
  gameState[index] = currentPlayer;

  cell.textContent = currentPlayer;

  if (checkWin()) {
    setTimeout(() => alert(`${currentPlayer}wins!`), 100);
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function checkWin() {
  return winningCombinations.some((combination) => {
    return combination.every((index) => gameState[index] === currentPlayer);
  });
}
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});
