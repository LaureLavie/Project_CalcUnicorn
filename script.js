// 1. je récupère les éléments nécessaires
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let current = ""; // Ce que je suis en train d'écrire

// 2. On ajoute un écouteur à chaque bouton
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // 3. Si je clique sur "C", j'efface tout
    if (value === "C") {
      current = "";
      display.textContent = "0";
      return;
    }

    // 4. Si je clique sur "=", je calcule le résultat
    if (value === "=") {
      try {
        const result = Function('"use strict"; return (' + current + ")")();
        display.textContent = result;
        current = result.toString(); // On continue avec le résultat
      } catch {
        display.textContent = "Erreur";
        current = "";
      }
      return;
    }

    // 5. Sinon, j'ajoute la valeur au calcul
    current += value;
    display.textContent = current;
  });
});
