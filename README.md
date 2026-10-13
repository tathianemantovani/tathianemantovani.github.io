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

Edite `src/data/site.ts` para atualizar textos, links, números, formação, serviços, segmentos, cases anônimos e depoimentos sem alterar os componentes. Preserve os status de formação e de revisão editorial. Novos depoimentos ainda não confirmados devem ficar com `status: 'pendenteRevisao'` para serem omitidos da página.

A titular conferiu e aprovou os oito depoimentos fornecidos. Todos estão com `status: 'aprovado'` e visíveis; a página reúne as onze seções previstas. Alterar esse status inclui ou oculta o registro na página gerada e na prévia local, sem iniciar uma publicação por si só.

As imagens originais fornecidas pela titular estão incluídas em `public/images/`, conforme o [guia de imagens](public/images/README.md): fotografia de 867 × 1024 px e ilustração de 981 × 756 px. Os caminhos, textos alternativos e dimensões ficam em `src/data/site.ts`.

Ao substituir alguma imagem, atualize `width` e `height` nos dados, revise o enquadramento e execute um novo build. Preserve a composição da fotografia e a transparência da ilustração. As imagens são incluídas somente quando os arquivos existem.

## Validação executada

- `npm ci`, `npm run check` e `npm run build` concluídos; o check retornou zero erros e avisos.
- Desenvolvimento e saída estática responderam HTTP 200 com o conteúdo e os links de contato esperados.
- Chromium em 320, 375, 768, 1024, 1440 e 1920 px: sem rolagem horizontal, erros de JavaScript, âncoras ausentes ou imagens quebradas.
- Menu por teclado, retorno do foco com Escape e movimento reduzido verificados; auditoria axe sem violações nos critérios WCAG AA selecionados. O contraste do hero foi conferido manualmente por causa da grade decorativa.
- Os oito depoimentos aprovados pela titular estão configurados para aparecer na seção de depoimentos.
- A presença das duas imagens originais atende à verificação obrigatória de assets do workflow. A publicação pelo workflow ainda não foi confirmada no GitHub.

## Revisões editoriais opcionais

- Se necessário, ajustar o indicador de livros entre `9+` e `9`.
- Refinar a apresentação de `12+` especializações; o rótulo atual distingue cursos concluídos e em andamento.
- Atualizar a seleção de cursos e instituições conforme desejado. Jornalismo e as especializações indicadas como em andamento devem continuar com esse status até sua conclusão.

Essas revisões não bloqueiam a publicação. Os oito depoimentos já foram aprovados; seus trechos permanecem fiéis ao conteúdo fornecido, sem completar sobrenomes ou conteúdo oculto e sem screenshots.

## Publicar no GitHub Pages

O branch `main` está preparado para o fluxo de publicação. A publicação ainda não foi confirmada; o GitHub Pages precisa estar configurado para usar GitHub Actions.

1. No repositório `tathianemantovani/tathianemantovani.github.io`, abra **Settings → General → Default branch** e selecione `main` como branch padrão.
2. Abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Essa configuração é manual; o workflow não habilita Pages automaticamente.
3. Abra **Actions → Publicar no GitHub Pages → Run workflow**, selecione o branch `main` e execute. Esse comando pode repetir a publicação caso um primeiro push tenha ocorrido antes da configuração de Pages.
4. Aguarde os jobs **Verificar e construir** e **Publicar** ficarem verdes. Abra a URL mostrada pelo deployment: <https://tathianemantovani.github.io/>. Só então considere a publicação confirmada.

Novos pushes em `main` iniciam `.github/workflows/deploy.yml` automaticamente. O workflow usa actions oficiais fixadas por SHA, Node.js 24, `npm ci`, verificação de tipos e build estático. O job de build só lê o código; o job de deploy recebe `pages: write` e `id-token: write`. As duas imagens originais já estão incluídas; o workflow verifica que continuam presentes e não vazias. O Astro usa `site: 'https://tathianemantovani.github.io'`, sem `base` de subdiretório.
