# Revisão do site

Esta branch disponibiliza o projeto para revisão e download. Um push em `revisao-site` não aciona o workflow de publicação, configurado para `main`.

## Capturas

- [Desktop](desktop.png)
- [Celular](mobile.png)

As capturas mostram a versão atual sem a fotografia e a ilustração originais. Os depoimentos permanecem pendentes e não aparecem na página.

## Baixar e visualizar

Na página desta branch no GitHub, use **Code → Download ZIP**. Extraia o arquivo e abra um terminal na pasta que contém `package.json`. Com Node.js 24 LTS instalado, execute:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Abra no navegador do mesmo computador o endereço exibido pelo terminal. Esses comandos executam a revisão local. `Ctrl+C` encerra o servidor.

## Editar e concluir

O conteúdo está em `src/data/site.ts`. A frase visível do início vem de `hero.headingLines`. Os depoimentos ficam em `testimonials.items`; `pendenteRevisao` oculta e `aprovado` inclui o registro na página após a confirmação editorial.

Inclua os originais em `public/images/foto-tathiane.jpg` e `public/images/ilustracao-livro-pena.png`, confira suas dimensões nos dados e revise o enquadramento. Também permanecem pendentes a revisão dos indicadores 9+/12+, a seleção da formação e a autorização dos depoimentos.

Veja o [README principal](../../README.md) para todas as instruções de conteúdo, validação e publicação.
