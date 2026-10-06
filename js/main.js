import { iniciarRoteador } from "./router.js";

document.documentElement.classList.add("js");

const chaveTema = "abrace:tema";
let tema = "claro";

try {
  const temaSalvo = localStorage.getItem(chaveTema);

  if (temaSalvo === "claro" || temaSalvo === "escuro") {
    tema = temaSalvo;
  }
} catch {
  // O switch funciona mesmo quando o armazenamento está indisponível.
}

document.documentElement.dataset.tema = tema;

document.addEventListener("DOMContentLoaded", () => {
  iniciarRoteador();

  const botao = document.getElementById("alternar-tema");
  const texto = document.getElementById("tema-texto");

  if (!botao || !texto) return;

  function atualizarSwitch() {
    const escuro = tema === "escuro";

    document.documentElement.dataset.tema = tema;
    botao.setAttribute("aria-checked", String(escuro));
    texto.textContent = escuro
      ? "Modo escuro ativo"
      : "Modo escuro";
  }

  atualizarSwitch();

  botao.addEventListener("click", () => {
    tema = tema === "claro" ? "escuro" : "claro";
    atualizarSwitch();

    try {
      localStorage.setItem(chaveTema, tema);
    } catch {
      // A troca de tema permanece disponível.
    }
  });
});