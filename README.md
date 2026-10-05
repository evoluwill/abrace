# Abrace

Projeto acadêmico de uma ONG fictícia, reorganizado como Single Page Application (SPA) em HTML, CSS e JavaScript puro.

## Estrutura

- `html/index.html`: estrutura fixa da aplicação, cabeçalho, área de renderização, rodapé e avisos.
- `css/reset.css`: normalização básica dos estilos do navegador.
- `css/estilos.css`: identidade visual, grade de 12 colunas e componentes.
- `css/responsivo.css`: adaptações para tablets e celulares.
- `imagens/`: fotografias, ilustrações, rabiscos e a logo oficial da Abrace.
- `js/templates.js`: conteúdo das páginas Início, Projetos e Contato.
- `js/router.js`: navegação por hash e renderização dos templates na área principal.
- `js/formulario.js`: máscaras, validações, mensagens de erro e feedback de envio.
- `js/animacoes.js`: entradas progressivas e interação sutil dos cards, com respeito à preferência de movimento reduzido.
- `js/storage.js`: armazenamento local dos cadastros simulados.
- `js/main.js`: inicialização da aplicação.

## Como visualizar

Abra a pasta `abrace` no VS Code, inicie o Live Server e acesse `html/index.html`.

A navegação utiliza as rotas `#inicio`, `#projetos` e `#contato`. O formulário é uma simulação acadêmica: os dados são armazenados somente no `localStorage` do navegador e não são enviados para um servidor real.
