const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const isANan = document.getElementById('isANan');
const raizQuadrada = document.getElementById('raiz-quadrada');
const numeroInteiro = document.getElementById('numero-inteiro');
const arrendodaParaCima = document.getElementById('arredonda-para-cima');
const arredondaParaBaixo = document.getElementById('arredonda-para-baixo');
const casaDecimal = document.getElementById('casa-decimal');

numeroTitulo.innerHTML = numero;

// isANan.innerHTML += (Number.isNaN(numero));
// raizQuadrada.innerHTML += (numero ** 0.5);
// numeroInteiro.innerHTML += (Number.isInteger(numero));
// arrendodaParaCima.innerHTML += Math.ceil(numero);
// arredondaParaBaixo.innerHTML += Math.floor(numero);
// casaDecimal.innerHTML += numero.toFixed(2);

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p> `
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}</p>`



