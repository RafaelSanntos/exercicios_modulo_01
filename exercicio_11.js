const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Criando função para obter os numeros;
function obterNumeroInteiro(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));
        if(!isNaN(input) || null) {
            console.clear();
            return input;
        }
        console.clear();
        console.log("Por favor, digite apenas números inteiros. Tente novamente!")
    }
}

// Criando função para verificar se n é par ou impar
function parOuImpar(numeroInteiro) {
    return numeroInteiro % 2 === 0 ? 'par' : 'ímpar';
}

// Criando função para exibir resultado
function exibirResultado() {
    while (true) {
        const numeroInteiro = obterNumeroInteiro("Digite o número inteiro que deseja saber se é PAR ou ÍMPAR (digite 0 ou um número negativo para sair): ");
        
        if (numeroInteiro <= 0) {
            console.log("Programa encerrado.");
            break; // Sai do loop se o número for nulo ou negativo
        }

        const resultado = parOuImpar(numeroInteiro);
        console.log(`O número ${numeroInteiro} é ${resultado}.`);
    }
}

//Instanciando função exibirResultado()
exibirResultado();