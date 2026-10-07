🛒 Projeto: Carrinho de Compras
Carrinho de compras inspirado no da Shopee: armazena itens e calcula os subtotais e o total automaticamente.
Entidades
Carrinho → `kart.js`
Itens → `itens.js`
Execução → `index.js`
---
📚 O que aprendi neste projeto
Modelagem e organização
[x] Identificar o domínio da aplicação e documentar no README
[x] Separar entidades em arquivos (`itens.js`, `kart.js`)
[x] Separar a camada de serviços (`services/`) do ponto de entrada (`index.js`)
Módulos ES (ESM)
[x] `"type": "module"` no `package.json`
[x] `export default` e `export { ... }` nomeado
[x] `import x from` e `import * as services from`
Funções e objetos
[x] Função fábrica (factory function) que retorna um objeto
[x] Shorthand de propriedades (`{ name, price, quantity }`)
[x] Método calculado dentro do objeto (`subTotal`)
[x] Closures
[x] Arrow functions
Arrays e métodos
[x] `push` para adicionar itens
[x] `findIndex` para localizar um item
[x] `splice` para remover pelo índice
[x] `reduce` para somar o total
[x] `forEach` com índice para exibir a lista
[x] Array como "banco de dados" em memória
Assincronismo
[x] `async` / `await`
[x] Top-level `await` em módulos
Lógica e regras de negócio
[x] Diferença entre remover (diminui a quantidade em 1) e deletar (tira o item inteiro)
[x] Tratamento de item inexistente com early return
[x] Mutação de objetos dentro de um array
Saída e formatação
[x] Template literals (``${...}``)
[x] `toFixed(2)` para valores em reais
[x] Formatação de saída no terminal com `console.log`
Ferramentas
[x] Iniciar um projeto Node com `package.json`
[x] Comentar trechos de código para testar partes isoladas
---
🚀 Próximos passos (Sugestão)
[ ] Entender quando `async` realmente é necessário (as funções atuais não são assíncronas)
[ ] Padronizar nomes (`iten` → `item`)
[ ] Simplificar condicionais com `else`
[ ] Validar entradas (preço e quantidade)
[ ] Escrever testes
[ ] Refatorar com classes
[ ] Persistir o carrinho em arquivo