import { paginas } from "./templates.js";
import { inicializarFormulario } from "./formulario.js";
import { inicializarAnimacoes } from "./animacoes.js";

const app = document.querySelector("#app");
const rotasDisponiveis = Object.keys(paginas);

function obterRotaAtual() {
  const rota = window.location.hash.replace("#", "").trim().toLowerCase();
  return rotasDisponiveis.includes(rota) ? rota : "inicio";
}

function atualizarNavegacao(rota) {
  document.querySelectorAll("[data-rota]").forEach((link) => {
    const estaAtivo = link.dataset.rota === rota;
    link.classList.toggle("ativo", estaAtivo);

    if (link.closest("nav")) {
      if (estaAtivo) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  });
}

function renderizarPagina({ moverFoco = false } = {}) {
  const rota = obterRotaAtual();
  const pagina = paginas[rota];

  app.innerHTML = "";
  app.innerHTML = pagina.conteudo;

  document.title = pagina.titulo;
  document.querySelector('meta[name="description"]').content = pagina.descricao;
  atualizarNavegacao(rota);

  if (rota === "contato") {
    inicializarFormulario();
  }

  inicializarAnimacoes();

  window.scrollTo({ top: 0, behavior: "auto" });

  if (moverFoco) {
    requestAnimationFrame(() => app.focus({ preventScroll: true }));
  }
}

function navegarPara(rota) {
  const destino = rotasDisponiveis.includes(rota) ? rota : "inicio";
  const novaHash = `#${destino}`;

  if (window.location.hash === novaHash) {
    renderizarPagina({ moverFoco: true });
    return;
  }

  window.location.hash = destino;
}

export function iniciarRoteador() {
  document.addEventListener("click", (evento) => {
    const link = evento.target.closest("[data-rota]");

    if (!link) return;

    evento.preventDefault();
    navegarPara(link.dataset.rota);
  });

  window.addEventListener("hashchange", () => {
    renderizarPagina({ moverFoco: true });
  });

  if (!window.location.hash) {
    window.history.replaceState(null, "", "#inicio");
  }

  renderizarPagina();
}
