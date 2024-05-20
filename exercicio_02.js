const prompt = require('prompt-sync')();

// Objeto para guardar as variáveis numeroEleitores, votosBrancos, votosNulos e votosValidos
const dadosDaEleicao = {};

// Função auxiliar para solicitar e validar entrada de dados
function solicitarNumero(promptMessage) {
    let input;
    while (true) {
        input = parseInt(prompt(promptMessage));
        if (!isNaN(input) && input >= 0) {
            console.clear();
            return input;
        }
        console.clear();
        console.log("Por favor, insira apenas números inteiros não negativos. Tente novamente.\n");
    }
}

function solicitarDadosDaEleicao() {
    dadosDaEleicao.numeroEleitores = solicitarNumero("Digite o número total de eleitores (use somente os números): ");
    dadosDaEleicao.votosBrancos = solicitarNumero("Digite o número total de votos brancos (use somente os números): ");
    dadosDaEleicao.votosNulos = solicitarNumero("Digite o número total de votos nulos (use somente os números): ");
    dadosDaEleicao.votosValidos = solicitarNumero("Digite o número total de votos válidos (use somente os números): ");
}

function validarVotosEmRelacaoAoTotalDeEleitores() {
    while (true) {
        const totalVotos = dadosDaEleicao.votosBrancos + dadosDaEleicao.votosNulos + dadosDaEleicao.votosValidos;
        if (totalVotos === dadosDaEleicao.numeroEleitores) {
            return;
        }
        console.clear();
        if (totalVotos > dadosDaEleicao.numeroEleitores) {
            console.log("O número total de votos é MAIOR do que o número de eleitores. Por favor, corrija os dados da eleição!\n");
        } else {
            console.log("O número total de votos é MENOR do que o número de eleitores. Por favor, corrija os dados da eleição!\n");
        }
        solicitarDadosDaEleicao();
    }
}

function calcularPercentualVotos({ votosBrancos, votosNulos, votosValidos, numeroEleitores }) {
    const percentualVotosBrancos = (votosBrancos / numeroEleitores) * 100;
    const percentualVotosNulos = (votosNulos / numeroEleitores) * 100;
    const percentualVotosValidos = (votosValidos / numeroEleitores) * 100;

    return {
        percentualVotosBrancos,
        percentualVotosNulos,
        percentualVotosValidos,
    };
}

function exibirDadosDaEleicao(percentuais) {
    const percentualVotosBrancos = percentuais.percentualVotosBrancos.toFixed(2);
    const percentualVotosNulos = percentuais.percentualVotosNulos.toFixed(2);
    const percentualVotosValidos = percentuais.percentualVotosValidos.toFixed(2);

    console.log(`Total de eleitores: ${dadosDaEleicao.numeroEleitores}\n`);
    console.log(`Percentual de votos brancos: ${percentualVotosBrancos}%`);
    console.log(`Percentual de votos nulos: ${percentualVotosNulos}%`);
    console.log(`Percentual de votos válidos: ${percentualVotosValidos}%\n`);
}

// Chamando as funções
solicitarDadosDaEleicao();
validarVotosEmRelacaoAoTotalDeEleitores();
const percentuais = calcularPercentualVotos(dadosDaEleicao);
exibirDadosDaEleicao(percentuais);
