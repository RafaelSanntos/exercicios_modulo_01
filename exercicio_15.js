const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Inicializa as variáveis para armazenar a soma dos produtos e a soma dos pesos
let somaProdutos = 0;
let somaPesos = 0;

// Função para ler números decimais e pesos e calcular a média ponderada
function calcularMediaPonderada() {
    // Loop para continuar pedindo números e pesos até que o usuário digite 0
    while (true) {
        // Pede ao usuário que insira um número decimal
        let numero = parseFloat(prompt("Digite um número decimal (ou 0 para terminar): "));
        
        // Se o número for 0, interrompe o loop
        if (numero === 0) {
            break;
        }
        
        // Pede ao usuário que insira o peso para este número
        let peso = parseFloat(prompt("Digite o peso para este número: "));
        
        // Adiciona o produto do número e do peso à soma dos produtos
        somaProdutos += numero * peso;
        
        // Adiciona o peso à soma dos pesos
        somaPesos += peso;
    }
    
    // Calcula a média ponderada
    let mediaPonderada = somaProdutos / somaPesos;
    
    // Exibe o resultado da média ponderada
    console.log("A média ponderada dos números é: " + mediaPonderada);
}

// Chama a função para começar o cálculo
calcularMediaPonderada();
