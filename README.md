# Tathiane Mantovani

Site profissional de página única em português, feito com Astro, TypeScript e CSS. O endereço esperado após a publicação é <https://tathianemantovani.github.io/>. A publicação e a configuração do GitHub Pages ainda dependem dos passos abaixo.

## Desenvolvimento

Use Node.js 24 LTS, conforme `.nvmrc`. O runtime do ambiente em nuvem já fornece Node.js; `nvm` é opcional para instalação local.

```sh
export ASTRO_TELEMETRY_DISABLED=1
npm ci
npm run dev
```

No ambiente em nuvem, mantenha `ASTRO_TELEMETRY_DISABLED=1` para que o Astro não precise escrever no diretório de configuração pessoal. Para iniciar explicitamente o servidor local, use `npm run dev -- --host 127.0.0.1 --port 4321`. Para verificar a versão estática:

```sh
npm run check
npm run build
npm run preview -- --host 127.0.0.1 --port 4322
```

`check` verifica os tipos e componentes Astro; `build` gera `dist/`; `preview` serve o resultado localmente. Não é necessário token, CMS, analytics ou serviço externo para executar o site.

## Edição do conteúdo

Edite `src/data/site.ts` para atualizar textos, links, números, formação, serviços, segmentos, cases anônimos e depoimentos sem alterar os componentes. Preserve os status de formação e de revisão editorial. Os depoimentos pendentes ficam nos dados e são omitidos da página pública até confirmação.

A titular escolheu manter os oito depoimentos pendentes. Por isso, a página exibe dez seções no momento; a seção de depoimentos ocupa sua posição prevista quando houver registros com `status: 'aprovado'`. Altere esse status somente após a revisão editorial.

As imagens devem ser adicionadas em `public/images/` com os nomes exatos descritos no [guia de imagens](public/images/README.md). Confira também as dimensões e o recorte declarados nos dados. A fotografia e a ilustração originais estão ausentes e não foram substituídas; o hero depende desses arquivos para sua finalização.

Após adicionar as imagens, confira `width` e `height` nos dados, revise o enquadramento e execute um novo build. Elas são incluídas somente quando os arquivos existem.

## Validação executada

- `npm ci`, `npm run check` e `npm run build` concluídos; o check retornou zero erros e avisos.
- Desenvolvimento e saída estática responderam HTTP 200 com o conteúdo e os links de contato esperados.
- Chromium em 320, 375, 768, 1024, 1440 e 1920 px: sem rolagem horizontal, erros de JavaScript, âncoras ausentes ou imagens quebradas.
- Menu por teclado, retorno do foco com Escape e movimento reduzido verificados; auditoria axe sem violações nos critérios WCAG AA selecionados. O contraste do hero foi conferido manualmente por causa da grade decorativa.
- Os oito depoimentos pendentes foram confirmados ausentes no HTML público.
- O bloqueio por imagens do workflow foi testado localmente; o workflow ainda não executou no GitHub.

## Pendências editoriais

- Confirmar o indicador de livros: `9+` ou `9`.
- Confirmar como apresentar `12+` especializações sem sugerir que todas foram concluídas.
- Validar a seleção de cursos e instituições; Jornalismo e as especializações indicadas como em andamento devem continuar com esse status explícito.
- Revisar com a titular os nomes, vínculos e trechos dos depoimentos e confirmar seu uso público. Manter o texto fiel ao trecho fornecido, sem completar sobrenomes ou conteúdo oculto e sem publicar screenshots.
- Adicionar a fotografia e a ilustração originais e conferir o hero nos tamanhos de tela previstos.

## Publicar no GitHub Pages

Nenhuma configuração remota, commit, push ou publicação é realizada pelo desenvolvimento local.

1. Revise o conteúdo e adicione as duas imagens originais. O workflow falha antes do build e do deploy se algum desses arquivos estiver ausente ou vazio.
2. Salve e envie os arquivos revisados para o repositório `tathianemantovani/tathianemantovani.github.io`. O branch remoto `main` ainda precisa ser criado; siga o fluxo de revisão autorizado, preservando o trabalho existente, sem reset ou push forçado.
3. No GitHub, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Essa configuração é manual; o workflow não habilita Pages automaticamente.
4. Um push em `main` inicia `.github/workflows/deploy.yml`. Também é possível usar **Actions → Publicar no GitHub Pages → Run workflow**, selecionando `main`.
5. Confira o resultado dos jobs e a URL mostrada pelo deployment. Só então considere a publicação confirmada.

O workflow usa actions oficiais fixadas por SHA, Node.js 24, `npm ci`, verificação de tipos e build estático. O job de build só lê o código; o job de deploy recebe `pages: write` e `id-token: write`. Os dados editoriais pendentes não bloqueiam a publicação das demais seções enquanto permanecerem omitidos. O Astro deve usar `site: 'https://tathianemantovani.github.io'`, sem `base` de subdiretório.
