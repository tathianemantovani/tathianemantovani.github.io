# Tathiane Mantovani

Site profissional de página única em português, feito com Astro, TypeScript e CSS, publicado em <https://tathianemantovani.github.io/>. As revisões são preparadas no branch `revisao-site`; novos pushes em `main` iniciam a atualização pelo GitHub Pages.

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

Edite `src/data/site.ts` para atualizar textos, links, números, formação, serviços, segmentos, cases anônimos e depoimentos sem alterar os componentes. A frase do início está em `hero.headingLines`. Ajustes de cores, tipografia, espaçamento e responsividade ficam em `src/styles/global.css`.

A formação pública exibe somente os nomes de duas graduações e dez especializações. Instituições, períodos e status conhecidos permanecem nos dados como referência editorial, sem aparecer na página. Preserve essas informações e não atribua conclusão, instituição ou datas aos cursos sem confirmação. O bloco de trajetória profissional foi retirado do Sobre; os cinco diferenciais permanecem.

A revisão atual reúne doze competências de expertise e doze serviços. Os oito depoimentos foram aprovados pela titular e receberam os textos e vínculos fornecidos para esta revisão. Estão com `status: 'aprovado'` e visíveis; a página reúne as onze seções previstas.

Novos depoimentos ainda não confirmados devem ficar com `status: 'pendenteRevisao'` para serem omitidos da página. Alterar esse status inclui ou oculta o registro na página gerada e na prévia local, sem iniciar uma publicação por si só.

As imagens originais fornecidas pela titular estão incluídas em `public/images/`, conforme o [guia de imagens](public/images/README.md): fotografia de 867 × 1024 px e ilustração de 981 × 756 px. Os caminhos, textos alternativos e dimensões ficam em `src/data/site.ts`.

A ilustração original de livro e pena aparece ampliada no hero, com suas linhas em laranja aplicadas por uma máscara CSS a partir do PNG original. O arquivo mantém seus pixels, proporções e transparência. O destaque chega a uma largura de até 450 px no desktop e até 340 px no celular, limitado ao espaço disponível; conteúdo e ilustração ficam empilhados em telas de até 740 px. A mesma ilustração integra a marca no cabeçalho e no rodapé pelo componente `src/components/Brand.astro`. Ela não aparece no Sobre. A fotografia original permanece no repositório como acervo, sem exibição no site.

Ao substituir alguma imagem, atualize `width` e `height` nos dados, revise o enquadramento e execute um novo build. Preserve a composição da fotografia e a transparência da ilustração. As imagens são incluídas somente quando os arquivos existem.

## Validação

Antes de publicar alterações, execute `npm run check` e `npm run build`, depois confira a saída com `npm run preview`.

- Verifique as larguras de 320, 375, 768, 1024, 1440 e 1920 px, sem rolagem horizontal, imagens quebradas ou âncoras ausentes.
- Confira o menu por teclado, o retorno do foco com Escape, o movimento reduzido e o contraste. A grade decorativa do hero pode exigir conferência manual de contraste na auditoria axe.
- Confira a formação apenas com nomes, os doze itens de expertise, os doze serviços e os oito depoimentos aprovados.
- O workflow executa instalação pelo lockfile, verificação de tipos e build; também exige que as duas imagens originais estejam presentes e não vazias.

## Revisões editoriais opcionais

- Se necessário, ajustar o indicador de livros entre `9+` e `9`.
- Se necessário, revisar o indicador de `12+` especializações; o rótulo público atual é `especializações acadêmicas`.
- Atualizar a seleção de nomes da formação e os metadados conhecidos nos dados, preservando o status real dos cursos.

Os oito depoimentos atuais já foram aprovados; suas citações e vínculos seguem o conteúdo fornecido pela titular, sem screenshots.

## Atualizar o GitHub Pages

O site já está publicado. Um push em `revisao-site` disponibiliza o código para revisão e não aciona a publicação automática. Depois de revisar as alterações, incorporá-las a `main` inicia `.github/workflows/deploy.yml` e atualiza o site quando os jobs terminam com sucesso.

Para conferir a configuração ou repetir uma atualização:

1. Em **Settings → General → Default branch**, mantenha `main` como branch padrão.
2. Em **Settings → Pages → Build and deployment → Source**, mantenha **GitHub Actions**. Essa configuração é manual; o workflow não habilita Pages automaticamente.
3. Em **Actions → Publicar no GitHub Pages → Run workflow**, selecione `main` e execute para repetir a publicação desse branch.
4. Aguarde os jobs **Verificar e construir** e **Publicar** ficarem verdes e confira <https://tathianemantovani.github.io/>.

Novos pushes em `main` iniciam `.github/workflows/deploy.yml` automaticamente. O workflow usa actions oficiais fixadas por SHA, Node.js 24, `npm ci`, verificação de tipos e build estático. O job de build só lê o código; o job de deploy recebe `pages: write` e `id-token: write`. As duas imagens originais já estão incluídas; o workflow verifica que continuam presentes e não vazias. O Astro usa `site: 'https://tathianemantovani.github.io'`, sem `base` de subdiretório.
