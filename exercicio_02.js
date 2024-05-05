const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

console.log("\n********************************************************************** Exercício 2 **********************************************************************\n");

// objeto para guardar as variáveis numeroEleitores, votosBrancos, votosNulos e votosValidos
var dadosDaEleicao = {};

// Função para solicitar os dados ao usuário
    //isNaN() - verifica se o input NÃO é um número e retorna (true) e se for número retorna (false)
function solicitardadosDaEleicao() {
    let numeroEleitoresInput;
    while (true) {
        numeroEleitoresInput = parseInt(prompt("Digite o número total de eleitores (use somente os números): "));
        if (!isNaN(numeroEleitoresInput)) {
            console.clear();
            break; // Sai do loop se o valor for um número
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    let votosBrancosInput;
    while (true) {
        votosBrancosInput = parseInt(prompt("Digite o número total de votos brancos (use somente os números): "));
        if (!isNaN(votosBrancosInput)) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    let votosNulosInput;
    while (true) {
        votosNulosInput = parseInt(prompt("Digite o número total de votos nulos (use somente os números): "));
        if (!isNaN(votosNulosInput)) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    let votosValidosInput;
    while (true) {
        votosValidosInput = parseInt(prompt("Digite o número total de votos válidos (use somente os números): "));
        if (!isNaN(votosValidosInput)) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }

    // Armazenando os valores diretamente após a entrada do usuário
    dadosDaEleicao.numeroEleitores = numeroEleitoresInput;
    dadosDaEleicao.votosBrancos = votosBrancosInput;
    dadosDaEleicao.votosNulos = votosNulosInput;
    dadosDaEleicao.votosValidos = votosValidosInput;
}    

// instanciar ao usuário que insira os dadosDaEleicao
solicitardadosDaEleicao();


// Exceção: garantir que o usuário não digite uma quantidade de votos maior ou menor que o número de eleitores - BÔNUS
while (isNaN(dadosDaEleicao.numeroEleitores) || isNaN(dadosDaEleicao.votosBrancos) || isNaN(dadosDaEleicao.votosNulos) || isNaN(dadosDaEleicao.votosValidos) || dadosDaEleicao.votosBrancos + dadosDaEleicao.votosNulos + dadosDaEleicao.votosValidos !== dadosDaEleicao.numeroEleitores) {
    console.clear();
    if (isNaN(dadosDaEleicao.numeroEleitores) || isNaN(dadosDaEleicao.votosBrancos) || isNaN(dadosDaEleicao.votosNulos) || isNaN(dadosDaEleicao.votosValidos)) {
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    } else if (dadosDaEleicao.votosBrancos + dadosDaEleicao.votosNulos + dadosDaEleicao.votosValidos > dadosDaEleicao.numeroEleitores) {
        console.log("O número total de votos é MAIOR do que o número de eleitores. Por favor, corrija os dados da eleicao da eleição!\n");
    } else {
        console.log("O número total de votos é MENOR do que o número de eleitores. Por favor, corrija os dados da eleicao da eleição!\n");
    }
    solicitardadosDaEleicao();
}

console.clear();


//Calcular o percentual que cada tipo de voto representa em relação a todos os votos

function calcularPercentualVotos(votosBrancos, votosNulos, votosValidos){

    let percentualVotosBrancos = (votosBrancos / dadosDaEleicao.numeroEleitores) * 100;
    let percentualVotosNulos = (votosNulos / dadosDaEleicao.numeroEleitores) * 100;
    let percentualVotosValidos = (votosValidos / dadosDaEleicao.numeroEleitores) * 100;

    return {
        percentualVotosBrancos: percentualVotosBrancos,
        percentualVotosNulos: percentualVotosNulos,
        percentualVotosValidos: percentualVotosValidos
    };
}

//Exibir o calculo do percentual dos votos
//toFixed(2) - arredonda o número em 2 casas decimais

let percentuais = calcularPercentualVotos(dadosDaEleicao.votosBrancos, dadosDaEleicao.votosNulos, dadosDaEleicao.votosValidos);

console.log("*************************************************************************************************\n");

console.log("Total de eleitores: " + dadosDaEleicao.numeroEleitores + "\n");

console.log("Percentual de votos brancos: " + percentuais.percentualVotosBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentuais.percentualVotosNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentuais.percentualVotosValidos.toFixed(2) + "%\n");

console.log("*************************************************************************************************\n");
