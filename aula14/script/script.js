// Mais sobre numbers | IEEE 754-2008   

let num1 = 10; // Number
let num2 = 2.5; // Number

//console.log(num1.toString() + num2); // Converte o número para string
//num1 = num1.toString(); // Altera o valor da variável para string
//console.log(num1.toString(2)); // Faz a representação binária do número
//console.log(num1.toFixed(2)); // Arredonda para 2 casas decimais.
//console.log(Number.isInteger(num1)); // Retorna true or false se é ou não um n° inteiro.
/*let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // Diz se sua conta é ou não um NaN, retorna true or false. */

// Corrigindo impresição de n° com casas decimais
let num3 = 0.7;
let num4 = 0.1;


num3 += num4;
num3 += num4;
num3 += num4;
num3 = Number(num3.toFixed(2)); // Corrige impresição de n° com casas decimais.
console.log(num3);
console.log(Number.isInteger(num3));

// Corrigindo impresição de n° com casas decimais fazendo conta

num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.8
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 0.9
num3 = ((num3 * 100) + (num4 * 100)) / 100; // 1.0
