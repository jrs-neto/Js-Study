// Exercício com variáveis

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);*/

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);