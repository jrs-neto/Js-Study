// Let vs Var - Primeira diferença

// Podemos redeclarar uma variável usando VAR, porém, NÃO é recomendado usar VAR, redeclarar uma variável pode causar erro.
var nome = 'José';
var nome = 'Sandro';

nome = 'Luiz' // NÃO FAÇA ISSO! vai criar uma variável global, podendo afetar outras variáveis no seu código.
