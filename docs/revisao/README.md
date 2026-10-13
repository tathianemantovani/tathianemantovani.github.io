# Revisão do site

Esta pasta disponibiliza capturas e instruções para revisão. O site já está publicado em <https://tathianemantovani.github.io/>. Um push em `revisao-site` disponibiliza o código para revisão; um push em `main` inicia o workflow de atualização do GitHub Pages.

## Capturas

- [Início no desktop](desktop.png)
- [Início no celular](mobile.png)
- [Sobre e formação](formacao.png)
- [Depoimentos aprovados](depoimentos.png)

As capturas mostram esta revisão, gerada a partir do build estático. Para conferir toda a página, use os comandos abaixo. Os oito depoimentos foram aprovados pela titular e incorporam as citações e os vínculos fornecidos para esta revisão; a página reúne as onze seções previstas.

A revisão atual apresenta fotografia menor e circular, ilustração original de livro e pena integrada à marca no cabeçalho e no rodapé, doze itens de expertise e doze serviços. O Sobre mantém cinco diferenciais, sem o bloco de trajetória; sua formação exibe somente nomes de duas graduações e dez especializações.

## Baixar e visualizar

Na página do repositório no GitHub, selecione `revisao-site` para conferir as alterações em revisão, ou `main` para conferir o código publicado, e use **Code → Download ZIP**. Extraia o arquivo e abra um terminal na pasta que contém `package.json`. Com Node.js 24 LTS instalado, execute:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Abra no navegador do mesmo computador o endereço exibido pelo terminal. Esses comandos executam a revisão local. `Ctrl+C` encerra o servidor.

## Editar e concluir

O conteúdo está em `src/data/site.ts`; o visual fica em `src/styles/global.css`. A frase visível do início vem de `hero.headingLines`. Os depoimentos ficam em `testimonials.items`; `pendenteRevisao` oculta e `aprovado` inclui o registro na página. Os oito registros atuais já foram aprovados. Alterar o status atualiza a prévia e os próximos builds, sem iniciar um deploy por si só.

Os originais já estão incluídos em `public/images/foto-tathiane.jpg` (867 × 1024 px) e `public/images/ilustracao-livro-pena.png` (981 × 756 px). Ao substituir as imagens, atualize suas dimensões nos dados e revise o enquadramento. `src/components/Brand.astro` integra a ilustração original à marca.

A formação mostra somente nomes. Instituições, períodos e status conhecidos permanecem em `site.ts` como referência editorial, sem aparecer na página. Preserve esses metadados e não invente informações dos novos cursos. Como revisão opcional, é possível ajustar `9+` ou `9` livros, revisar o indicador `12+` de especializações e atualizar a seleção da formação.

Antes de concluir alterações, execute `npm run check` e `npm run build`; confira a saída com `npm run preview -- --host 127.0.0.1 --port 4322`.

## Atualizar a versão online

A versão online já foi publicada. Depois da revisão, incorpore as alterações de `revisao-site` a `main` para iniciar a publicação automática. Para conferir a configuração ou repetir a publicação no GitHub:

1. Em **Settings → General → Default branch**, mantenha `main`.
2. Em **Settings → Pages → Build and deployment → Source**, mantenha **GitHub Actions**.
3. Em **Actions → Publicar no GitHub Pages → Run workflow**, selecione `main` e execute.
4. Aguarde os jobs ficarem verdes e confira <https://tathianemantovani.github.io/>.

Veja o [README principal](../../README.md) para todas as instruções de conteúdo, validação e publicação.
