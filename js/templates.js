export const paginas = {
  inicio: {
    titulo: "Início | Abrace",
    descricao: "Abrace conecta crianças, famílias e voluntários em ações comunitárias na zona leste de São Paulo.",
    conteudo: `
      <section class="hero">
        <picture class="hero-imagem">
          <source srcset="../imagens/fotos/abrace-hero.webp" type="image/webp">
          <source srcset="../imagens/fotos/abrace-hero.jpg" type="image/jpeg">
          <img src="../imagens/fotos/abrace-hero.png" width="1600" height="800" alt="Crianças e adultos de diferentes culturas em uma atividade comunitária.">
        </picture>
        <div class="hero-grade container grid">
          <div class="hero-conteudo col-6">
            <small>Gente que cuida de gente</small>
            <h1>Um abraço pode mudar muita coisa.</h1>
            <p>Desde 2021, conectamos famílias, educadores e voluntários para ampliar oportunidades na zona leste de São Paulo.</p>
            <a class="botao" href="#contato" data-rota="contato">Quero fazer parte</a>
          </div>
        </div>
      </section>

      <section class="secao intro container grid" id="sobre">
        <div class="col-5">
          <span class="etiqueta">Sobre a Abrace</span>
          <h2>Uma rede que nasceu da vizinhança.</h2>
        </div>
        <div class="col-7 intro-texto">
          <p class="texto-grande">O cuidado emergencial virou presença contínua.</p>
          <p>A Abrace começou quando moradoras, educadores e pequenos comércios se uniram para apoiar famílias afetadas pela pandemia. Hoje, cada ação é planejada com as pessoas do território.</p>
        </div>
      </section>

      <section class="impacto container grid" aria-labelledby="titulo-impacto">
        <div class="col-4">
          <span class="etiqueta">Resultados de 2025</span>
          <h2 id="titulo-impacto">Presença que gera impacto.</h2>
        </div>
        <ul class="dados col-8">
          <li><strong>286</strong><span>famílias acompanhadas</span></li>
          <li><strong>186</strong><span>crianças e adolescentes</span></li>
          <li><strong>38</strong><span>voluntários ativos</span></li>
          <li><strong>14,8 t</strong><span>de alimentos destinados</span></li>
        </ul>
      </section>

      <section class="secao frentes container">
        <div class="titulo-com-rabisco">
          <span class="etiqueta">O que fazemos</span>
          <h2>Nossas frentes</h2>
        </div>
        <div class="grid">
          <article class="cartao amarelo col-4"><p class="numero">01</p><h3>Aprender juntos</h3><p>Leitura, apoio escolar e oficinas criativas para estudantes de 7 a 14 anos.</p></article>
          <article class="cartao coral col-4"><p class="numero">02</p><h3>Mesa que acolhe</h3><p>Alimentos frescos e itens essenciais para famílias acompanhadas pela rede.</p></article>
          <article class="cartao verde col-4"><p class="numero">03</p><h3>Culturas em movimento</h3><p>Arte, memória e convivência em encontros abertos à comunidade.</p></article>
        </div>
        <p class="link-secao"><a class="botao" href="#projetos" data-rota="projetos">Conheça os projetos</a></p>
      </section>
    `
  },

  projetos: {
    titulo: "Projetos | Abrace",
    descricao: "Conheça os projetos e cases de educação, segurança alimentar e cultura da Abrace.",
    conteudo: `
      <section class="cabecalho-pagina banner-amarelo container grid">
        <div class="banner-texto col-5">
          <span class="etiqueta">Feitos com a comunidade</span>
          <h1>Projetos que aproximam pessoas.</h1>
          <p class="texto-grande">Cada iniciativa combina escuta, acompanhamento e metas possíveis para o território.</p>
        </div>
        <picture class="banner-imagem col-7">
          <source srcset="../imagens/fotos/abrace-hero.webp" type="image/webp">
          <source srcset="../imagens/fotos/abrace-hero.jpg" type="image/jpeg">
          <img src="../imagens/fotos/abrace-hero.png" width="1600" height="800" alt="Crianças e adultos reunidos em uma atividade comunitária.">
        </picture>
      </section>

      <section class="projetos projetos-largos" aria-labelledby="titulo-projetos">
        <h2 id="titulo-projetos" class="titulo-secao">Nossas iniciativas</h2>

        <article class="projeto projeto-amarelo">
          <picture class="projeto-imagem">
            <source srcset="../imagens/fotos/abrace-educacao.webp" type="image/webp">
            <source srcset="../imagens/fotos/abrace-educacao.jpg" type="image/jpeg">
            <img src="../imagens/fotos/abrace-educacao.png" width="1200" height="800" loading="lazy" alt="Educadora e crianças lendo e desenhando juntas.">
          </picture>
          <div class="projeto-conteudo grid">
            <p class="numero projeto-numero col-2">01</p>
            <div class="col-5"><h3>Aprender juntos</h3><p>Duas tardes por semana de leitura, apoio escolar e experimentação artística, com turmas pequenas e acompanhamento das famílias.</p></div>
            <dl class="ficha col-5"><div><dt>Público</dt><dd>7 a 14 anos</dd></div><div><dt>Quando</dt><dd>terças e quintas</dd></div><div><dt>Vagas</dt><dd>48 por semestre</dd></div></dl>
          </div>
        </article>

        <article class="projeto projeto-verde">
          <picture class="projeto-imagem">
            <source srcset="../imagens/fotos/abrace-comunidade.webp" type="image/webp">
            <source srcset="../imagens/fotos/abrace-comunidade.jpg" type="image/jpeg">
            <img src="../imagens/fotos/abrace-comunidade.png" width="1200" height="800" loading="lazy" alt="Crianças e adultos organizando alimentos em uma ação comunitária.">
          </picture>
          <div class="projeto-conteudo grid">
            <p class="numero projeto-numero col-2">02</p>
            <div class="col-5"><h3>Mesa que acolhe</h3><p>Uma ação mensal reúne alimentos frescos e itens essenciais. O atendimento considera o cadastro, a composição familiar e a escuta da equipe.</p></div>
            <dl class="ficha col-5"><div><dt>Público</dt><dd>famílias acompanhadas</dd></div><div><dt>Quando</dt><dd>último sábado do mês</dd></div><div><dt>Alcance</dt><dd>até 120 famílias</dd></div></dl>
          </div>
        </article>

        <article class="projeto projeto-coral">
          <picture class="projeto-imagem">
            <source srcset="../imagens/fotos/abrace-hero.webp" type="image/webp">
            <source srcset="../imagens/fotos/abrace-hero.jpg" type="image/jpeg">
            <img src="../imagens/fotos/abrace-hero.png" width="1600" height="800" loading="lazy" alt="Grupo multicultural reunido em uma atividade educativa.">
          </picture>
          <div class="projeto-conteudo grid">
            <p class="numero projeto-numero col-2">03</p>
            <div class="col-5"><h3>Culturas em movimento</h3><p>Oficinas conduzidas por artistas e moradores valorizam memória, música, desenho e histórias de diferentes culturas.</p></div>
            <dl class="ficha col-5"><div><dt>Público</dt><dd>todas as idades</dd></div><div><dt>Quando</dt><dd>sábados alternados</dd></div><div><dt>Ciclo</dt><dd>12 encontros</dd></div></dl>
          </div>
        </article>
      </section>

      <section class="case container grid">
        <div class="col-4"><span class="etiqueta">Case de impacto</span><h2>Da timidez ao palco.</h2></div>
        <div class="col-8"><p class="texto-grande">Ana, 12 anos, chegou à oficina evitando ler em voz alta. Seis meses depois, apresentou um texto autoral no encontro da comunidade.</p><p>Com autorização da família, o relato foi acompanhado pela educadora do projeto. Histórias como a de Ana orientam as próximas turmas e mostram resultados que os números sozinhos não contam.</p><small>Nome alterado para preservar a participante.</small></div>
      </section>
    `
  },

  contato: {
    titulo: "Contato | Abrace",
    descricao: "Entre em contato para participar, doar ou construir uma parceria com a Abrace.",
    conteudo: `
      <section class="cabecalho-pagina banner-verde container grid">
        <div class="banner-texto col-5">
          <span class="etiqueta">Chegue mais perto</span>
          <h1>Seu jeito de ajudar também conta.</h1>
          <p class="texto-grande">Envie seus dados para conversar sobre voluntariado, doações ou parcerias.</p>
        </div>
        <picture class="banner-imagem col-7">
          <source srcset="../imagens/fotos/abrace-comunidade.webp" type="image/webp">
          <source srcset="../imagens/fotos/abrace-comunidade.jpg" type="image/jpeg">
          <img src="../imagens/fotos/abrace-comunidade.png" width="1200" height="800" alt="Crianças e adultos preparando alimentos em uma ação comunitária.">
        </picture>
      </section>

      <section class="secao contato-grade container grid">
        <aside class="como-funciona col-4">
          <span class="etiqueta">Como funciona</span>
          <h2>Primeiro, a gente se conhece.</h2>
          <ol><li>Você envia seus dados.</li><li>Nossa equipe entra em contato.</li><li>Juntos, encontramos a melhor forma de participar.</li></ol>
          <p>Retorno em até cinco dias úteis.</p>
          <address><a href="mailto:contato@abrace.org.br">contato@abrace.org.br</a><br>São Paulo · SP</address>
        </aside>

        <div class="formulario col-8">
          <h2>Cadastro de interesse</h2>
          <p>Os campos marcados com * são obrigatórios.</p>

          <form id="form-interesse" novalidate>
            <fieldset>
              <legend>Dados pessoais</legend>
              <div class="campos-grid">
                <div class="campo campo-largo">
                  <label for="nome">Nome completo *</label>
                  <input type="text" id="nome" name="nome" autocomplete="name" maxlength="100" data-validar aria-describedby="erro-nome" required>
                  <small class="campo-erro" id="erro-nome"></small>
                </div>
                <div class="campo">
                  <label for="cpf">CPF *</label>
                  <input type="text" id="cpf" name="cpf" inputmode="numeric" maxlength="14" placeholder="000.000.000-00" data-validar aria-describedby="erro-cpf" required>
                  <small class="campo-erro" id="erro-cpf"></small>
                </div>
                <div class="campo">
                  <label for="nascimento">Data de nascimento *</label>
                  <input type="date" id="nascimento" name="nascimento" autocomplete="bday" data-validar aria-describedby="erro-nascimento" required>
                  <small class="campo-erro" id="erro-nascimento"></small>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Contato</legend>
              <div class="campos-grid">
                <div class="campo">
                  <label for="email">E-mail *</label>
                  <input type="email" id="email" name="email" autocomplete="email" maxlength="254" data-validar aria-describedby="erro-email" required>
                  <small class="campo-erro" id="erro-email"></small>
                </div>
                <div class="campo">
                  <label for="telefone">Telefone com DDD *</label>
                  <input type="tel" id="telefone" name="telefone" autocomplete="tel" inputmode="tel" maxlength="15" placeholder="(00) 00000-0000" data-validar aria-describedby="erro-telefone" required>
                  <small class="campo-erro" id="erro-telefone"></small>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Endereço</legend>
              <div class="campos-grid">
                <div class="campo">
                  <label for="cep">CEP *</label>
                  <input type="text" id="cep" name="cep" autocomplete="postal-code" inputmode="numeric" maxlength="9" placeholder="00000-000" data-validar aria-describedby="erro-cep" required>
                  <small class="campo-erro" id="erro-cep"></small>
                </div>
                <div class="campo">
                  <label for="numero">Número *</label>
                  <input type="text" id="numero" name="numero" autocomplete="address-line2" maxlength="10" data-validar aria-describedby="erro-numero" required>
                  <small class="campo-erro" id="erro-numero"></small>
                </div>
                <div class="campo campo-largo">
                  <label for="logradouro">Rua ou avenida *</label>
                  <input type="text" id="logradouro" name="logradouro" autocomplete="address-line1" maxlength="120" data-validar aria-describedby="erro-logradouro" required>
                  <small class="campo-erro" id="erro-logradouro"></small>
                </div>
                <div class="campo campo-largo">
                  <label for="complemento">Complemento</label>
                  <input type="text" id="complemento" name="complemento" autocomplete="address-line3" maxlength="80" placeholder="Apartamento, bloco ou referência">
                </div>
                <div class="campo">
                  <label for="cidade">Cidade *</label>
                  <input type="text" id="cidade" name="cidade" autocomplete="address-level2" maxlength="100" data-validar aria-describedby="erro-cidade" required>
                  <small class="campo-erro" id="erro-cidade"></small>
                </div>
                <div class="campo">
                  <label for="estado">Estado (UF) *</label>
                  <input type="text" id="estado" name="estado" autocomplete="address-level1" maxlength="2" placeholder="SP" data-validar aria-describedby="erro-estado" required>
                  <small class="campo-erro" id="erro-estado"></small>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Como deseja participar</legend>
              <div class="campos-grid">
                <div class="campo campo-largo">
                  <label for="interesse">Área de interesse *</label>
                  <select id="interesse" name="interesse" data-validar aria-describedby="erro-interesse" required>
                    <option value="">Selecione uma opção</option>
                    <option value="voluntariado">Voluntariado</option>
                    <option value="doacao">Doação</option>
                    <option value="parceria">Parceria institucional</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                  <small class="campo-erro" id="erro-interesse"></small>
                </div>
                <div class="campo campo-largo">
                  <label for="mensagem">Mensagem *</label>
                  <textarea id="mensagem" name="mensagem" rows="5" maxlength="600" data-validar aria-describedby="erro-mensagem" required></textarea>
                  <small class="campo-erro" id="erro-mensagem"></small>
                </div>
                <div class="campo campo-largo campo-consentimento">
                  <input type="checkbox" id="consentimento" name="consentimento" value="aceito" data-validar aria-describedby="erro-consentimento" required>
                  <label for="consentimento">Autorizo o uso dos meus dados para que a Abrace entre em contato comigo. *</label>
                  <small class="campo-erro" id="erro-consentimento"></small>
                </div>
              </div>
            </fieldset>

            <button type="submit"><span>Enviar cadastro</span></button>
            <p class="nota">Seus dados serão usados apenas para responder ao interesse enviado.</p>
            <p id="form-status" class="form-status" tabindex="-1" aria-live="polite"></p>
          </form>
        </div>
      </section>
    `
  }
};
