# Revisão do site

Esta pasta disponibiliza capturas e instruções para revisão. O site já está publicado em <https://tathianemantovani.github.io/>. Um push em `revisao-site` disponibiliza o código para revisão; um push em `main` inicia o workflow de atualização do GitHub Pages.

## Capturas

- [Início no desktop](desktop.png)
- [Início no celular](mobile.png)
- [Expertise e marca e reputação](expertise.png)
- [Públicos atendidos](publicos.png)
- [Sobre e formação](formacao.png)
- [Depoimentos aprovados](depoimentos.png)
- [Serviços](servicos.png)
- [Indicadores](numeros.png)
- [Sobre e formação no celular](sobre-mobile.png)
- [Depoimentos no celular](depoimentos-mobile.png)
- [Serviços no celular](servicos-mobile.png)
- [Indicadores no celular](numeros-mobile.png)

As capturas mostram o build estático desta revisão. Para conferir toda a página, use os comandos abaixo. Os oito depoimentos foram aprovados pela titular e preservam as citações e os vínculos fornecidos; a página reúne as onze seções previstas.

A revisão atual apresenta a ilustração original de livro e pena ampliada no hero, com suas linhas em laranja aplicadas por máscara CSS. O PNG mantém seus pixels, proporções e transparência. O destaque usa largura de até 450 px no desktop e até 340 px no celular, conforme o espaço disponível; texto e ilustração ficam empilhados em telas de até 740 px. A marca do cabeçalho e do rodapé continua usando a ilustração original. A fotografia permanece no repositório como acervo e não aparece no site.

A página reúne nove itens de expertise e quatorze serviços. Dados, performance e análise da concorrência integram SEO estratégico; o trabalho editorial integra SEO conteúdo e clusters temáticos. Os serviços incluem SEO para redes sociais com LinkedIn e YouTube, reputação, aplicativos, criação de site e blog e produção de artigos, roteiros e legendas. O serviço complementar recebe o título Otimização do Reclame AQUI, mantendo seu escopo restrito às funcionalidades públicas sob controle do titular da conta.

O Sobre apresenta cinco cards com ícones em uma linha no desktop, sem o bloco de trajetória. A formação fica abaixo, exibindo apenas nomes de duas graduações e dez especializações: quatro colunas com três cursos por coluna no desktop, duas colunas em telas intermediárias e uma nas menores. Os oito depoimentos preservam suas citações e aparecem em quatro colunas no desktop, com tipografia compacta.

## Baixar e visualizar

Na página do repositório no GitHub, selecione `revisao-site` para conferir as alterações em revisão, ou `main` para conferir o código publicado, e use **Code → Download ZIP**. Extraia o arquivo e abra um terminal na pasta que contém `package.json`. Com Node.js 24 LTS instalado, execute:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4321
```

Abra no navegador do mesmo computador o endereço exibido pelo terminal. Esses comandos executam a revisão local. `Ctrl+C` encerra o servidor.

## Editar e concluir

O conteúdo está em `src/data/site.ts`; o visual fica em `src/styles/global.css`. A frase visível do início vem de `hero.headingLines`. Os depoimentos ficam em `testimonials.items`; `pendenteRevisao` oculta e `aprovado` inclui o registro na página. Os oito registros atuais já foram aprovados. Alterar o status atualiza a prévia e os próximos builds, sem iniciar um deploy por si só.

Os originais já estão incluídos em `public/images/foto-tathiane.jpg` (867 × 1024 px, acervo sem exibição) e `public/images/ilustracao-livro-pena.png` (981 × 756 px, hero e marca). Ao substituir as imagens, atualize suas dimensões nos dados e revise o enquadramento. `src/components/Brand.astro` integra a ilustração original à marca.

A formação mostra somente nomes. Instituições, períodos e status conhecidos permanecem em `site.ts` como referência editorial, sem aparecer na página. Preserve esses metadados e não invente informações dos novos cursos. Como revisão opcional, é possível ajustar `9+` ou `9` livros, revisar o indicador `12+` de especializações e atualizar a seleção da formação.

Antes de concluir alterações, execute `npm run check` e `npm run build`; confira a saída com `npm run preview -- --host 127.0.0.1 --port 4322`.

## Atualizar a versão online

A versão online já foi publicada. Depois da revisão, incorpore as alterações de `revisao-site` a `main` para iniciar a publicação automática. Para conferir a configuração ou repetir a publicação no GitHub:

1. Em **Settings → General → Default branch**, mantenha `main`.
2. Em **Settings → Pages → Build and deployment → Source**, mantenha **GitHub Actions**.
3. Em **Actions → Publicar no GitHub Pages → Run workflow**, selecione `main` e execute.
4. Aguarde os jobs ficarem verdes e confira <https://tathianemantovani.github.io/>.

Veja o [README principal](../../README.md) para todas as instruções de conteúdo, validação e publicação.
