# Revisão do site

Esta pasta disponibiliza capturas e instruções para revisão. O projeto está preparado em `main` para publicação; um push em `revisao-site` não aciona o workflow, configurado para `main`.

## Capturas

- [Desktop](desktop.png)
- [Celular](mobile.png)
- [Depoimentos aprovados](depoimentos.png)

As capturas mostram a versão com a fotografia e a ilustração originais fornecidas pela titular. Os oito depoimentos foram conferidos e aprovados pela titular, estão visíveis e completam as onze seções previstas.

## Baixar e visualizar

Na página do repositório no GitHub, selecione `main` e use **Code → Download ZIP**. Extraia o arquivo e abra um terminal na pasta que contém `package.json`. Com Node.js 24 LTS instalado, execute:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Abra no navegador do mesmo computador o endereço exibido pelo terminal. Esses comandos executam a revisão local. `Ctrl+C` encerra o servidor.

## Editar e concluir

O conteúdo está em `src/data/site.ts`. A frase visível do início vem de `hero.headingLines`. Os depoimentos ficam em `testimonials.items`; `pendenteRevisao` oculta e `aprovado` inclui o registro na página. Os oito registros atuais já foram aprovados. Alterar o status atualiza a prévia e os próximos builds, sem iniciar um deploy por si só.

Os originais já estão incluídos em `public/images/foto-tathiane.jpg` (867 × 1024 px) e `public/images/ilustracao-livro-pena.png` (981 × 756 px). Ao substituir as imagens, atualize suas dimensões nos dados e revise o enquadramento. Como revisão opcional, é possível ajustar `9+` ou `9` livros, refinar a qualificação de `12+` especializações e atualizar a seleção da formação. Mantenha explícitos os cursos em andamento.

## Publicar para visualizar online

A publicação ainda não foi confirmada. O branch `main` está preparado e os originais atendem à verificação de imagens do workflow. No GitHub:

1. Em **Settings → General → Default branch**, selecione `main`.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**.
3. Em **Actions → Publicar no GitHub Pages → Run workflow**, selecione `main` e execute.
4. Aguarde os jobs ficarem verdes e abra a URL mostrada pelo deployment, esperada em <https://tathianemantovani.github.io/>.

Veja o [README principal](../../README.md) para todas as instruções de conteúdo, validação e publicação.
