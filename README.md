## Versionamento

O projeto utiliza uma estrutura de branches baseada no GitFlow:

- main: destinada às versões estáveis do projeto.
- develop: destinada à integração das alterações em desenvolvimento.
- feature/documentacao: criada para melhorar a documentação do projeto.

As alterações das branches feature devem ser revisadas por meio de pull requests antes da integração à develop. Quando uma versão estiver pronta e validada, será integrada à main.

## Padrão de commits

As próximas alterações utilizarão mensagens com os seguintes prefixos:

- feat: nova funcionalidade.
- fix: correção de um problema.
- docs: alteração na documentação.
- style: ajustes de formatação do código.
- refactor: reorganização do código sem alterar seu comportamento.
- test: inclusão ou atualização de testes.
- chore: tarefas de manutenção e configuração.
