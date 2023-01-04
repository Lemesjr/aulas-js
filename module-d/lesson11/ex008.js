// Para escrever na tela do node.js não funciona o comando "document.write." pois não está vinculado ao HTML/DOM
// O comando para escrever aqui no node.js é "console.log()"

console.log('O console funcionou corretamente');

var vel = 70.5;

console.log(`A velocidade do seu carro é ${vel} km/h.`);

// Condição simples, pois não tem um senão neste exemplo

if (vel>=80) {
    console.log(`Sua velocidade está acima do permitido.`);
    console.log(`Você será multado!!!`);
} 
    
console.log(`Dirija sempre usando o sinto de segurança!`);





