// Strings ( String são indexadas, significa que cada caracter tem um indice começando em 0)

//let umaString = "Um \"texto\""; -> Barra invertida pode ser usada como caracter de escape.
//let umaString = "Um \\"texto\""; -> Duas barras invertidas para exibir uma.
//               01234567
 //let umaString = 'Um texto';
 console.log(umaString[4]); // Exibe o caracter do índice 4
 console.log(umaString.charAt(6)); // Exibe o caracter do índice 6

//3 formas de concatenação
// console.log(umaString.concat(' em um lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

//console.log(umaString.indexOf('texto')); // Diz o índice que a palavra "texto" começa
// console.log(umaString.lastIndexOf('m' , 3)); // Começa a buscar de trás pra frente, a partir da posição 3.
// console.log(umaString.match(/[a-z]/g)) // retorna todas as letras minúculas
// console.log(umaString.search(/[x]/)) // retorna o índice
// console.log(umaString.replace('Um', 'Outra')); // Substitui as palavra

let umaString = "O rato roeu a roupa do rei de roma."

console.log(umaString.replace(/r/, '#')); // Substitui a letra R por #
console.log(umaString.replace(/r/g, '#')); // Substitui todas as letras R por #
console.log(umaString.length); // Retorna o tamanho da String (a quantidade de caracters)
console.log(umaString.slice(2, 6)); // Retorna o pedaço da string, iniciando em 2 e terminando em 6
console.log(umaString.slice(-3)); // Pega o tamanho total da string menos a quantidade que você está pedindo Dica: Conte de trás pra frente
console.log(umaString.split(' ')); // Divide a string
console.log(umaString.split('r')); // Divide a string
console.log(umaString.split(' ', 2)); // Divide a string e coloca um limite na divisão, no caso 2
console.log(umaString.toUpperCase()); // Retorna a string toda maiúscula
console.log(umaString.toLocaleLowerCase()); // Retorna a string toda em minúscula.