const fullName = prompt('Type your Fullname:');
document.body.innerHTML += `Digite seu nome completo: <strong>${fullName}.</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${fullName.length} letras. </strong><br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${fullName.charAt(1)}.</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra O no seu nome? <strong>${fullName.indexOf('o')}.</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra O no seu nome? <strong>${fullName.lastIndexOf('o')}.</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${fullName.slice(-3)}.</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${fullName.split(' ')}.</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${fullName.toUpperCase()}.</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${fullName.toLocaleLowerCase()}.</strong><br />`;