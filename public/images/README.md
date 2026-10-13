# Imagens originais

Esta pasta contém os dois arquivos originais fornecidos pela titular:

- `foto-tathiane.jpg`: fotografia profissional de Tathiane Mantovani, 867 × 1024 px, mantida como acervo sem exibição no site.
- `ilustracao-livro-pena.png`: ilustração original de livro com pena, 981 × 756 px, com transparência, exibida no hero e na marca.

O hero exibe a ilustração ampliada com suas linhas em laranja. Uma máscara CSS usa o PNG original para aplicar essa cor, preservando o arquivo, as proporções e a transparência. A largura máxima do destaque é 450 px no desktop e 340 px no celular, sempre limitada à largura disponível. Em telas de até 740 px, texto e ilustração ficam empilhados. Ela também integra a marca no cabeçalho e no rodapé por meio de `src/components/Brand.astro`, com a adaptação de cor já definida para o fundo escuro. A fotografia não é renderizada. O workflow verifica a presença dos dois arquivos e bloqueia a publicação se algum estiver ausente ou vazio.

Ao substituir os arquivos, preserve a composição da fotografia e a transparência da ilustração. Atualize as dimensões em `src/data/site.ts`, confira o enquadramento e o contraste e execute um novo build. Não adicione capturas de recomendações, currículo ou outros documentos privados nesta pasta.
