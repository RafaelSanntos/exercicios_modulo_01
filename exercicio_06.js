const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Função para obter os lados A, B e C do triângulo
function obterLadosTriangulo(mensagem) {
    while (true) {
        const input = parseInt(prompt(mensagem))
        if(!isNaN(input)){
            console.clear();
            return input;
        }
        console.clear();
        console.log("Por favor, digite um número positivo. Tente novamente!");
    }
}

// Função para verificar se é possível formar um triângulo com os valores
function verificarSeFormaUmTriangulo(A, B, C) {
    // Verifica se os lados formam um triângulo
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            return "Forma um triângulo Equilátero"; // Todos os lados são iguais
        } else if (A === B || A === C || B === C) {
            return "Forma um triângulo Isósceles"; // Dois lados são iguais
        } else {
            return "Forma um triângulo Escaleno"; // Todos os lados são diferentes
        }
    } else {
        return "Não forma um triângulo";
    }
}

// Chamando função obterLadosTriangulo()
let ladoA = obterLadosTriangulo("Digite o valor do lado A do triangulo: ");
let ladoB = obterLadosTriangulo("Digite o valor do lado B do triangulo: ");
let ladoC = obterLadosTriangulo("Digite o valor do lado C do triangulo: ");

// Chamando a função verificarSeFormaUmTriangulo()
console.log(verificarSeFormaUmTriangulo(ladoA, ladoB, ladoC));