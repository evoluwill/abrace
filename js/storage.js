const CHAVE_CADASTROS = "abrace:cadastros";
const LIMITE_CADASTROS = 20;

export function recuperarCadastros() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_CADASTROS));
    return Array.isArray(dados) ? dados : [];
  } catch {
    return [];
  }
}

export function salvarCadastro(cadastro) {
  const cadastros = recuperarCadastros();
  cadastros.unshift(cadastro);
  localStorage.setItem(
    CHAVE_CADASTROS,
    JSON.stringify(cadastros.slice(0, LIMITE_CADASTROS))
  );
}

export function criarIdentificador() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }

  return `abrace-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
