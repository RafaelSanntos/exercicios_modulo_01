var prompt = require('prompt-sync')();

console.log("\n");
console.log("********************************************************************** Exercício 2 **********************************************************************\n");

// objeto para guardar as variáveis numeroEleitores, votosBrancos, votosNulos e votosValidos
var dados = {};

// Função para solicitar os dados ao usuário
function solicitarDados() {
    var numeroEleitoresInput;
    while (true) {
        numeroEleitoresInput = prompt("Digite o número total de eleitores (use somente os números): ");
        if (!isNaN(numeroEleitoresInput)) {
            console.clear();
            break; // Sai do loop se o valor for um número
        }
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    var votosBrancosInput;
    while (true) {
        votosBrancosInput = prompt("Digite o número total de votos brancos (use somente os números): ");
        if (!isNaN(votosBrancosInput)) {
            console.clear();
            break;
        }
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    var votosNulosInput;
    while (true) {
        votosNulosInput = prompt("Digite o número total de votos nulos (use somente os números): ");
        if (!isNaN(votosNulosInput)) {
            console.clear();
            break;
        }
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
    
    var votosValidosInput;
    while (true) {
        votosValidosInput = prompt("Digite o número total de votos válidos (use somente os números): ");
        if (!isNaN(votosValidosInput)) {
            console.clear();
            break;
        }
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }

    // Convertendo os valores para números após todas as entradas serem válidas
    var numeroEleitores = parseInt(numeroEleitoresInput);
    var votosBrancos = parseInt(votosBrancosInput);
    var votosNulos = parseInt(votosNulosInput);
    var votosValidos = parseInt(votosValidosInput);

    // Atualizando os dados e inserindo eles em uma variavel externa para usa-lás fora da função
    dados.numeroEleitores = numeroEleitores;
    dados.votosBrancos = votosBrancos;
    dados.votosNulos = votosNulos;
    dados.votosValidos = votosValidos;
}

// Solicitar ao usuário que insira os dados
solicitarDados();


// Exceção: garantir que o usuário não digite uma quantidade de votos maior ou menor que o número de eleitores - BÔNUS
while (isNaN(dados.numeroEleitores) || isNaN(dados.votosBrancos) || isNaN(dados.votosNulos) || isNaN(dados.votosValidos) || dados.votosBrancos + dados.votosNulos + dados.votosValidos !== dados.numeroEleitores) {
    console.clear();
    if (isNaN(dados.numeroEleitores) || isNaN(dados.votosBrancos) || isNaN(dados.votosNulos) || isNaN(dados.votosValidos)) {
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    } else if (dados.votosBrancos + dados.votosNulos + dados.votosValidos > dados.numeroEleitores) {
        console.log("O número total de votos é MAIOR do que o número de eleitores. Por favor, corrija os dados!\n");
    } else {
        console.log("O número total de votos é MENOR do que o número de eleitores. Por favor, corrija os dados!\n");
    }
    solicitarDados();
}

console.clear();


//Calcular o percentual que cada tipo de voto representa em relação a todos os votos

function calcularPercentualVotos(votosBrancos, votosNulos, votosValidos){

    var percentualVotosBrancos = (votosBrancos / dados.numeroEleitores) * 100;
    var percentualVotosNulos = (votosNulos / dados.numeroEleitores) * 100;
    var percentualVotosValidos = (votosValidos / dados.numeroEleitores) * 100;

    return {
        percentualVotosBrancos: percentualVotosBrancos,
        percentualVotosNulos: percentualVotosNulos,
        percentualVotosValidos: percentualVotosValidos
    };
}

//Exibir o calculo do percentual dos votos
//toFixed(2) - arredonda o número em 2 casas decimais

var percentuais = calcularPercentualVotos(dados.votosBrancos, dados.votosNulos, dados.votosValidos);

console.log("*************************************************************************************************\n");

console.log("Total de eleitores: " + dados.numeroEleitores + "\n");

console.log("Percentual de votos brancos: " + percentuais.percentualVotosBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentuais.percentualVotosNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentuais.percentualVotosValidos.toFixed(2) + "%\n");

console.log("*************************************************************************************************\n");