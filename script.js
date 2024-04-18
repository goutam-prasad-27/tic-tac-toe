let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#resetGame");
let newGame = document.querySelector("#newGame");
let winnerMsg = document.querySelector(".winnerMsg");
let winInfo = document.querySelector(".winInfo");
let draw = document.querySelector(".draw");

let turn = true;
let movesPlayed = 0;

const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const gameReset = () => {
  turn = true;
  enableGame();
};

const disableGame = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableGame = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winInfo.classList.add("hide");
    draw.classList.add("hide");
  }
};

const showDraw = () => {
  draw.classList.remove("hide");
  disableGame();
};

const showWinnerMsg = (winner) => {
  winnerMsg.innerHTML = `<i>Congratulations, <strong>${winner}</strong> You Win!</i>`;
  winInfo.classList.remove("hide");
  disableGame();
};

const checkWin = () => {
  for (let pattern of wins) {
    let p1val = boxes[pattern[0]].innerText;
    let p2val = boxes[pattern[1]].innerText;
    let p3val = boxes[pattern[2]].innerText;

    if (p1val != "" && p2val != "" && p3val != "") {
      if (p1val === p2val && p2val === p3val) {
        showWinnerMsg(p1val);
      }
    }
  }

  if (movesPlayed === boxes.length) {
    showDraw();
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn === true) {
      box.innerText = "X";
      box.style.color = "#4a5759";
      turn = false;
    } else {
      box.innerText = "O";
      box.style.color = "#353535";
      turn = true;
    }
    box.disabled = true;
    movesPlayed++;
    checkWin();
  });
});

newGame.addEventListener("click", enableGame);
resetGame.addEventListener("click", enableGame);
