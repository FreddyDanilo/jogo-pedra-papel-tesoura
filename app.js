const playerOptionsList = document.querySelectorAll(".player .option");
const enemyOptionsList = document.querySelectorAll(".enemy .option");

playerOptionsList.forEach((option) => {
  option.onclick = () => {
    clearOptions(playerOptionsList);

    option.style.opacity = "1";
    option.setAttribute("data-selected", true);

    iaEnemy();

    const movePlayer = option.getAttribute("data-value");
    const moveEnemy = iaEnemy();

    result(movePlayer, moveEnemy);
  };
});

const iaEnemy = () => {
  const optionRandom = Math.floor(Math.random() * enemyOptionsList.length);
  const optionSelected = enemyOptionsList[optionRandom];

  clearOptions(enemyOptionsList);

  optionSelected.style.opacity = "1";
  optionSelected.setAttribute("data-selected", "true");

  return optionSelected.getAttribute("data-value");
};

const clearOptions = (optionsList) => {
  optionsList.forEach((option) => {
    option.setAttribute("data-selected", "false");
    option.style.opacity = "0.5";
  });
};

const result = (movePlayer, moveEnemy) => {
  const resultElement = document.querySelector(".result-container span");

  if (movePlayer === moveEnemy) {
    resultElement.textContent = "Você empatou 😢";
  } else if (
    (movePlayer === "stone" && moveEnemy === "paper") ||
    (movePlayer === "paper" && moveEnemy === "scissor") ||
    (movePlayer === "scissor" && moveEnemy === "stone")
  ) {
    resultElement.textContent = "Você perdeu 😭";
  } else if (
    (movePlayer === "stone" && moveEnemy === "scissor") ||
    (movePlayer === "paper" && moveEnemy === "stone") ||
    (movePlayer === "scissor" && moveEnemy === "paper")
  ) {
    resultElement.textContent = "Você ganhou 🥲";
  }
};
