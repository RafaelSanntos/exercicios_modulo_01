const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Criando a função obterQuantidadeMacas()
function obterQuantidadeMacas(mensagem){
    while(true){
        const input = parseInt(prompt(mensagem));
        if(!isNaN(input)) {
            return input;
        }
        console.clear();
        console.log("Por favor, insira apenas números inteiros. Tente novamente.\n");
    }
}

// Criando a função calcularValorTotal()
function calcularValorTotal(quantidadeDeMacas){
    return quantidadeDeMacas >= 12 ? quantidadeDeMacas * 0.25 : quantidadeDeMacas * 0.30;
}

// Criando a função exibirValorTotal()
function exibirValorTotal(){
    const quantidadeTotalMaca = obterQuantidadeMacas("As maçãs custam R$ 0,30 centavos cada unidade, em compras a partir de 12 unidades a unidade sai por R$ 0,25 centavos. Digite a quantidade que deseja comprar: ");
    const valorTotalCompra = calcularValorTotal(quantidadeTotalMaca);

    console.clear();

    console.log("Total de maçãs: " + quantidadeTotalMaca);
    console.log("Total da compra R$" + valorTotalCompra.toFixed(2));
}

// Chamando função exibirValorTotal()
exibirValorTotal();
