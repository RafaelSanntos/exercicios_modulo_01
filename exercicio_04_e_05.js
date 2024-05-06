const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Função para obter notas
function obterNotas(mensagem){
    while (true) {
        const input = parseFloat(prompt(mensagem));
        if (!isNaN(input) && input >= 0 && input <= 10) {
            console.clear();
            return input;
        }
        console.clear();
        console.log("Por favor, digite um número positivo de 0 até 10. Tente novamente!");
    }
}

// Função para calcular a média semestral
function obterMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função para verificar se atingiu a média
function verificarMedia(media) {
    if (media >= 6) {
        console.log("PARABÉNS! Você foi aprovado. Sua média foi " + media);
    } else {
        console.log("Você foi REPROVADO! Estude mais. Sua média foi " + media);
    }
}

// Chamando a função obterNotas()
let nota1 = obterNotas("Digite a primeira nota (entre 0 e 10): ");
console.clear();
let nota2 = obterNotas("Digite a segunda nota (entre 0 e 10): ");
console.clear();

// Chamando a função obterMedia() e armazenando o resultado em uma variável
let media = obterMedia(nota1, nota2);

// Chamando a função verificarMedia() e passando a média como argumento
verificarMedia(media);
