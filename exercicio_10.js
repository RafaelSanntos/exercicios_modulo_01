const prompt = require('prompt-sync')();

// Criando fução obterNumero()
function obterNumero(mensagem) {
    while(true) {
        const input = parseInt(prompt(mensagem));
        if(!isNaN(input)) {
            console.clear();
            return input;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
}

// Criando função exibirNumero()
function exibirNumero(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + 'º ' + numero);
    }
}


// Instanciando função obterNumero()
const numero = obterNumero("Digite o número que deseja exibir 10x: ");

// Instanciando função exibirNumero()
exibirNumero(numero);