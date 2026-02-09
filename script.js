let btn = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let container = document.querySelector(".msg-container");
let win = document.querySelector(".win");
let newBtn = document.querySelector(".new");
let count = 1;

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
];
let showWinner = (winner) => {
  win.innerText = `Congrates the winner is ${winner}`;
  container.classList.remove("hidden");
};
let disable = () => {
  for (dis of btn) {
    dis.disabled = true;
  }
};
let resetG = () => {
  turnO = true;
  enable();
  container.classList.add("hidden");
};
let enable = () => {
  for (en of btn) {
    en.disabled = false;
    en.innerText = "";
  }
};
btn.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("The button was clicked");

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkPattern();
    Draw();
    count++;
  });
});
let checkPattern = () => {
  for (pattern of winPatterns) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        disable();
        showWinner(pos1);
      }
    }
  }
};
let Draw = () => {
  if (count === 9) {
    win.innerText = `Draw`;
  }
};
reset.addEventListener("click", resetG);
newBtn.addEventListener("click", resetG);
