const consultaMovimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
const consultaPonteiroPreciso = window.matchMedia("(hover: hover) and (pointer: fine)");

const seletoresEntrada = [
  ".hero-conteudo",
  ".intro > *",
  ".impacto > *",
  ".titulo-com-rabisco",
  ".cartao",
  ".cabecalho-pagina > *",
  ".titulo-secao",
  ".projeto",
  ".case > *",
  ".como-funciona",
  ".formulario",
  ".chamada-final-cartao"
].join(",");

function revelarElementos() {
  const elementos = [...document.querySelectorAll(seletoresEntrada)];

  elementos.forEach((elemento, indice) => {
    elemento.classList.add("revelar");
    elemento.style.setProperty("--atraso-entrada", `${(indice % 3) * 80}ms`);
  });

  if (consultaMovimentoReduzido.matches || !("IntersectionObserver" in window)) {
    elementos.forEach((elemento) => elemento.classList.add("visivel"));
    return;
  }

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      entrada.target.classList.add("visivel");
      observador.unobserve(entrada.target);
    });
  }, {
    threshold: 0.14,
    rootMargin: "0px 0px -7%"
  });

  elementos.forEach((elemento) => observador.observe(elemento));
}

function ativarMovimentoDosCartoes() {
  if (consultaMovimentoReduzido.matches || !consultaPonteiroPreciso.matches) return;

  document.querySelectorAll(".cartao").forEach((cartao) => {
    cartao.addEventListener("pointermove", (evento) => {
      const limites = cartao.getBoundingClientRect();
      const posicaoX = (evento.clientX - limites.left) / limites.width - 0.5;
      const posicaoY = (evento.clientY - limites.top) / limites.height - 0.5;

      cartao.style.setProperty("--giro-x", `${(-posicaoY * 3).toFixed(2)}deg`);
      cartao.style.setProperty("--giro-y", `${(posicaoX * 3).toFixed(2)}deg`);
      cartao.classList.add("cartao-em-movimento");
    });

    cartao.addEventListener("pointerleave", () => {
      cartao.style.removeProperty("--giro-x");
      cartao.style.removeProperty("--giro-y");
      cartao.classList.remove("cartao-em-movimento");
    });
  });
}

export function inicializarAnimacoes() {
  revelarElementos();
  ativarMovimentoDosCartoes();
}
