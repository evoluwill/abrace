import { criarIdentificador, salvarCadastro } from "./storage.js";

const ESTADOS_BRASILEIROS = new Set([
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
  "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO",
  "RR", "SC", "SP", "SE", "TO"
]);

let temporizadorToast;

function somenteNumeros(valor, limite) {
  return valor.replace(/\D/g, "").slice(0, limite);
}

function mascaraCPF(valor) {
  return somenteNumeros(valor, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraCEP(valor) {
  return somenteNumeros(valor, 8).replace(/(\d{5})(\d)/, "$1-$2");
}

function mascaraTelefone(valor) {
  const numeros = somenteNumeros(valor, 11);

  if (numeros.length <= 10) {
    return numeros
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  return numeros
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

function cpfValido(valor) {
  const cpf = somenteNumeros(valor, 11);

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  const calcularDigito = (quantidade) => {
    let soma = 0;

    for (let indice = 0; indice < quantidade; indice += 1) {
      soma += Number(cpf[indice]) * (quantidade + 1 - indice);
    }

    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return calcularDigito(9) === Number(cpf[9])
    && calcularDigito(10) === Number(cpf[10]);
}

function mensagemDeErro(campo) {
  const valor = campo.type === "checkbox" ? campo.checked : campo.value.trim();

  if (!valor) return "Preencha este campo para continuar.";

  switch (campo.id) {
    case "nome":
      return valor.split(/\s+/).length < 2
        ? "Informe seu nome e sobrenome."
        : "";
    case "cpf":
      return cpfValido(valor) ? "" : "Informe um CPF válido.";
    case "nascimento": {
      const data = new Date(`${valor}T12:00:00`);
      const hoje = new Date();
      return Number.isNaN(data.getTime()) || data > hoje
        ? "Informe uma data de nascimento válida."
        : "";
    }
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor)
        ? ""
        : "Informe um e-mail válido.";
    case "telefone": {
      const quantidade = somenteNumeros(valor, 11).length;
      return quantidade === 10 || quantidade === 11
        ? ""
        : "Informe um telefone com DDD.";
    }
    case "cep":
      return somenteNumeros(valor, 8).length === 8
        ? ""
        : "Informe um CEP com oito números.";
    case "logradouro":
      return valor.length >= 3 ? "" : "Informe o nome da rua ou avenida.";
    case "numero":
      return valor.length <= 10 ? "" : "Informe um número válido.";
    case "cidade":
      return valor.length >= 2 ? "" : "Informe a cidade.";
    case "estado":
      return ESTADOS_BRASILEIROS.has(valor.toUpperCase())
        ? ""
        : "Informe uma UF válida, como SP.";
    case "mensagem":
      return valor.length >= 10
        ? ""
        : "Conte um pouco mais sobre como deseja participar.";
    default:
      return "";
  }
}

function atualizarErro(campo, mensagem) {
  const erro = document.querySelector(`#erro-${campo.id}`);
  const possuiErro = Boolean(mensagem);

  campo.classList.toggle("campo-invalido", possuiErro);
  campo.setAttribute("aria-invalid", String(possuiErro));

  if (erro) erro.textContent = mensagem;

  return !possuiErro;
}

function validarCampo(campo) {
  return atualizarErro(campo, mensagemDeErro(campo));
}

function limparErro(campo) {
  if (campo.getAttribute("aria-invalid") === "true") {
    validarCampo(campo);
  }
}

function mostrarToast(mensagem, tipo = "sucesso") {
  const toast = document.querySelector("#toast");
  const texto = document.querySelector("#toast-mensagem");
  const icone = toast.querySelector(".toast-icone");

  window.clearTimeout(temporizadorToast);
  texto.textContent = mensagem;
  icone.textContent = tipo === "erro" ? "!" : "✓";
  toast.classList.toggle("toast-erro", tipo === "erro");
  toast.hidden = false;

  requestAnimationFrame(() => toast.classList.add("mostrar"));

  temporizadorToast = window.setTimeout(() => {
    toast.classList.remove("mostrar");
    window.setTimeout(() => {
      toast.hidden = true;
    }, 250);
  }, 5000);
}

function fecharToast() {
  const toast = document.querySelector("#toast");
  window.clearTimeout(temporizadorToast);
  toast.classList.remove("mostrar");
  window.setTimeout(() => {
    toast.hidden = true;
  }, 250);
}

function aplicarMascaras(formulario) {
  const cpf = formulario.querySelector("#cpf");
  const telefone = formulario.querySelector("#telefone");
  const cep = formulario.querySelector("#cep");
  const estado = formulario.querySelector("#estado");

  cpf.addEventListener("input", () => {
    cpf.value = mascaraCPF(cpf.value);
  });

  telefone.addEventListener("input", () => {
    telefone.value = mascaraTelefone(telefone.value);
  });

  cep.addEventListener("input", () => {
    cep.value = mascaraCEP(cep.value);
  });

  estado.addEventListener("input", () => {
    estado.value = estado.value.replace(/[^a-z]/gi, "").slice(0, 2).toUpperCase();
  });
}

function prepararCadastro(formulario) {
  const dados = Object.fromEntries(new FormData(formulario));

  return {
    id: criarIdentificador(),
    criadoEm: new Date().toISOString(),
    ...dados,
    consentimento: Boolean(dados.consentimento)
  };
}

export function inicializarFormulario() {
  const formulario = document.querySelector("#form-interesse");

  if (!formulario) return;

  const campos = [...formulario.querySelectorAll("[data-validar]")];
  const botao = formulario.querySelector('button[type="submit"]');
  const textoBotao = botao.querySelector("span");
  const status = formulario.querySelector("#form-status");
  const fechar = document.querySelector(".toast-fechar");

  aplicarMascaras(formulario);
  fechar.onclick = fecharToast;

  campos.forEach((campo) => {
    campo.addEventListener("blur", () => validarCampo(campo));
    campo.addEventListener("input", () => limparErro(campo));
    campo.addEventListener("change", () => limparErro(campo));
  });

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const resultados = campos.map(validarCampo);
    const valido = resultados.every(Boolean);

    if (!valido) {
      const primeiroCampoInvalido = campos[resultados.indexOf(false)];
      primeiroCampoInvalido.focus();
      status.textContent = "Revise os campos destacados antes de enviar.";
      mostrarToast("Alguns dados precisam ser revisados.", "erro");
      return;
    }

    botao.disabled = true;
    textoBotao.textContent = "Enviando...";

    try {
      salvarCadastro(prepararCadastro(formulario));
      formulario.reset();
      campos.forEach((campo) => atualizarErro(campo, ""));
      status.textContent = "Cadastro enviado com sucesso. Nossa equipe retornará em até cinco dias úteis.";
      status.focus();
      mostrarToast("Tudo certo! Cadastro enviado com sucesso.");
    } catch {
      status.textContent = "Não foi possível registrar o cadastro neste navegador. Tente novamente.";
      mostrarToast("Não foi possível concluir o envio.", "erro");
    } finally {
      botao.disabled = false;
      textoBotao.textContent = "Enviar cadastro";
    }
  });
}
