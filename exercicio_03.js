const prompt = require('prompt-sync')();

console.log("\n********************************************************************** Exercício 3 **********************************************************************\n");

// Função para solicitar um número inteiro
function solicitarInteiro(mensagem) {
    while (true) {
        const input = prompt(mensagem);
        if (!isNaN(input) && Number.isInteger(parseFloat(input))) {
            console.clear();
            return parseInt(input);
        }
        console.clear();
        console.log("Por favor, insira apenas números inteiros. Tente novamente.\n");
    }
}

// Função para somar 25 ao primeiro inteiro
function somar25(valor) {
    return valor + 25;
}

// Função para triplicar o valor
function triplicar(valor) {
    return valor * 3;
}

// Função para modificar o valor para 12% do original
function modificarParaDozePorCento(valor) {
    return valor * 0.12;
}

// Função para calcular a soma dos três primeiros inteiros
function calcularSoma(primeiro, segundo, terceiro) {
    return primeiro + segundo + terceiro;
}

// Solicitando os números inteiros
let primeiroInteiro = solicitarInteiro("Digite o primeiro número inteiro: ");
let segundoInteiro = solicitarInteiro("Digite o segundo número inteiro: ");
let terceiroInteiro = solicitarInteiro("Digite o terceiro número inteiro: ");
let quartoInteiro = solicitarInteiro("Digite o quarto número inteiro: ");

// Exibindo inputs antes da alteração
console.log("Os valores que você digitou são:\n");
console.log("Primeiro inteiro: " + primeiroInteiro);
console.log("Segundo inteiro: " + segundoInteiro);
console.log("Terceiro inteiro: " + terceiroInteiro);
console.log("Quarto inteiro: " + quartoInteiro);

// Realizando as operações
primeiroInteiro = somar25(primeiroInteiro);
segundoInteiro = triplicar(segundoInteiro);
terceiroInteiro = modificarParaDozePorCento(terceiroInteiro);

// Calculando a soma dos três primeiros inteiros
let resultadoSoma = calcularSoma(primeiroInteiro, segundoInteiro, terceiroInteiro);

// Mostrando os resultados
console.log("\nResultados após as operações:\n");
console.log("Resultado da soma de 25 ao primeiro inteiro:", primeiroInteiro);
console.log("Resultado da triplicação do segundo inteiro:", segundoInteiro);
console.log("Resultado da modificação do terceiro inteiro para 12% do valor original:", terceiroInteiro);
console.log("Soma dos valores originais dos três primeiros inteiros:", resultadoSoma);
