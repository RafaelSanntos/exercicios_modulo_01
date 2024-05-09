const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Criando função para obter os números
function obterNumeros(mensagem) {
    while(true) {
        let numero = parseFloat(prompt(mensagem));
        if(!isNaN(numero)) {
            console.clear();
            return numero;
        }
        console.clear();
        console.log("Por favor, digite apenas números. Tente novamente!")
    }
}

// Criando função para obter a média dos números
function obterMedia() {
    let soma = 0;
    let contador = 0;
    let numero;

    console.log("Digite números decimais. Digite 0 para calcular a média.");

    while (true) {
        numero = obterNumeros("Digite um número decimal:");
        if (numero === 0) {
            break;
        }
        soma += numero;
        contador++;
    }

    let media = contador > 0 ? soma / contador : 0;
    console.log("A média aritmética dos números digitados é:", media);
}

// Instanciando a função para testar
obterMedia();
