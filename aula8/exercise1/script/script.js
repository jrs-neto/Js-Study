// Exercícios - Const e Let

//José Rodrigues dos Santos Neto tem 30 anos, pesa 100 kg tem 1,84 de altura e seu IMC é de ... José Rodrigeus dos Santos Neto, nasceu em ...//

const nome = 'José';
const sobrenome = 'Rodrigues dos Santos Neto';
const idade = 30;
const peso = 100;
const alturaEmM = 1.85;
let indiceDeMassaCorporal = peso / (alturaEmM * alturaEmM); // peso / (altura * altura)
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM} e seu IMC é de ${indiceDeMassaCorporal}. ${nome} ${sobrenome}, nasceu em ${anoNascimento}.`);

