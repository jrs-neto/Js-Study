// Tipos de dados primitivos

const nome = 'Luiz'; // String
const nome1 = "Luiz"; // String
const nome2 = `Luiz`; // String
const num1 = 10; // NUmber
const num2 = 10.52; // Number (número de ponto flutuante)
let nomeAluno; //  undefined -> (não aponta para local nenhum na memória)
const sobrenomeAluno = null; //Nulo -> undefined -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true or false (lógico)

console.log(typeof nome, nome); // typeof nome, nome (vê o tipo e o valor da variável)

let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b) // 3, 2