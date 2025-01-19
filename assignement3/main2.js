// Sélection des éléments du DOM
const board = document.getElementById('board');
const rollDiceButton = document.getElementById('rollDice');
const diceResultDisplay = document.getElementById('diceResult');
const statusDisplay = document.getElementById('status');

// Variables de jeu
let currentPlayer = 1;
const playerPositions = { 1: 0, 2: 0 };
const totalCells = 25;
let gameOver = false;

// Création du plateau
function createBoard() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell-${i}`;
    board.appendChild(cell);
  }
}

// Déplacer le pion d'un joueur
function movePlayer(player, steps) {
  if (gameOver) return;

  const oldPosition = playerPositions[player];
  const newPosition = Math.min(oldPosition + steps, totalCells - 1);

  // Supprime l'ancien pion
  if (oldPosition >= 0) {
    const oldCell = document.getElementById(`cell-${oldPosition}`);
    oldCell.innerHTML = '';
  }

  // Ajoute le pion dans la nouvelle case
  const newCell = document.getElementById(`cell-${newPosition}`);
  const pawn = document.createElement('div');
  pawn.classList.add(`player${player}`);
  newCell.appendChild(pawn);

  playerPositions[player] = newPosition;

  // Vérifie la victoire
  if (newPosition === totalCells - 1) {
    gameOver = true;
    statusDisplay.innerHTML = `🎉 <span class="player${player}">player ${player}</span> won!`;
    rollDiceButton.disabled = true;
  }
}

// Lancer le dé
function rollDice() {
  if (gameOver) return;

  const diceResult = Math.floor(Math.random() * 6) + 1;
  diceResultDisplay.textContent = diceResult;

  // Déplace le pion du joueur actuel
  movePlayer(currentPlayer, diceResult);

  // Change de joueur
  if (!gameOver) {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    statusDisplay.innerHTML = `It's <span class="player${currentPlayer}">player ${currentPlayer} 's turn(${currentPlayer === 1 ? 'red' : 'green'})</span>.`;
  }
}

// Initialisation
createBoard();
rollDiceButton.addEventListener('click', rollDice);

  
