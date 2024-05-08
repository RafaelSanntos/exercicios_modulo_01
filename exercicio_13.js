const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Criando a função para obter os números
function obterNumerosInteiros(mensagem, quantidade) {
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
        while(true) {
            let input = parseInt(prompt(`Digite o número ${i + 1}: `));
            if(!isNaN(input)) {
                numeros.push(input);
                break;
            }
            console.clear();
            console.log("Por favor, digite apenas números inteiros. Tente novamente!");
        }
    }
    return numeros;
}

// Criando função para criar e exibir a tabuada de 1 x N
function calcularTabuadaN() {
    let numeros = obterNumerosInteiros("Digite 5 números para saber a tabuada de multiplicação de 1 x N: ", 5);
    console.clear();
    numeros.forEach(n => {
        console.log(`\nTabuada de 1 até ${n}:\n`);
        for (let j = 1; j <= n; j++) {
            console.log(`${j} x ${n} = ${j * n}`);
        }
    });
}

// Instancindo a função calcularTabuadaN()
calcularTabuadaN();
