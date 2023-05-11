// Operadores aritméticos, de atribuição e incremento

/* *
* Aritméticos
* + Adição / Concatenação
* ** Potenciação
* % Resto da divisão -> Faz a divisão e retorna o resto dela.
*/

/** Prioridade na realização de contas
 * () -> O que estiver dentro é executado primeiro
 * ** -> Potenciação
 * * / % -> multiplicação, divisão e resto da divisão 
 * + - -> soma e diminuição
 */

/* 
* ++ Operador de atribuição: Significa que a variável terá adicionado +1 valor a ela
Operador de Incremento = ++
Operador de Decremento = --
*/

// Operador de atribuição: Existe o pós e o pré fixado
/*let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);*/

/*let contador = 0;
contador += 2; // Adiciona o valor +2 a conta
contador += 2; // Adiciona o valor +2 a conta
contador += 2; // Adiciona o valor +2 a conta
console.log(contador)*/
/*let contador = 2;
contador *= 2; // Multiplica o valor +2 a conta
contador *= 2; // Multiplica o valor +2 a conta
contador *= 2; // Multiplica o valor +2 a conta
console.log(contador)*/

//Nan - Not a number
/*let num1 = 10;
let num2 = 5;
console.log(num1 + num2);*/

// Maneiras de converter números

const num1 = 10;
//const num2 = parseInt('5.2'); // Converte a String para números
//const num2 = parseFloat('5.2'); // Converte e considera as casas decimais
const num2 = Number('5.2'); // Converte o número da melhor maneira
console.log(num1 + num2);