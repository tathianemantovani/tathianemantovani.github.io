# Imagens originais

Esta pasta contém os dois arquivos originais fornecidos pela titular:

- `foto-tathiane.jpg`: fotografia profissional de Tathiane Mantovani, 867 × 1024 px, mantida como acervo sem exibição no site.
- `ilustracao-livro-pena.png`: ilustração original de livro com pena, 981 × 756 px, com transparência, exibida no hero e na marca.

O hero exibe a ilustração dentro de uma moldura circular com contorno laranja. Ela também integra a marca no cabeçalho e no rodapé por meio de `src/components/Brand.astro`; o CSS adapta sua cor ao fundo escuro sem alterar o arquivo original. A fotografia não é renderizada. O workflow verifica a presença dos dois arquivos e bloqueia a publicação se algum estiver ausente ou vazio.

Ao substituir os arquivos, preserve a composição da fotografia e a transparência da ilustração. Atualize as dimensões em `src/data/site.ts`, confira o enquadramento e o contraste e execute um novo build. Não adicione capturas de recomendações, currículo ou outros documentos privados nesta pasta.
