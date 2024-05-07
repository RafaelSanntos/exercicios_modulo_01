const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

// Função para obter os valores e armazenar em um Array
function obterValores(mensagem, mensagem2) {
    let valor1, valor2;

    while(true){
        valor1 = parseFloat(prompt(mensagem));
        if (!isNaN(valor1)) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }

    while(true){
        valor2 = parseFloat(prompt(mensagem2));
        if (!isNaN(valor2) && valor2 !== valor1) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números e diferentes de " + valor1 + ". Tente novamente.\n");
    }

    //Criando um Array
    const valoresArray = [valor1, valor2];

    return valoresArray;
}

// Função para escrever os valores em ordem crescente
function ordenarOrdemCrescente(array) {
    return array.sort((a, b) => {
        if (a < b) {
            return -1; // retorna um valor negativo se 'a' deve ser classificado antes de 'b'
        }
        return 1; // retorna um valor positivo se 'b' deve ser classificado antes de 'a'
    });
}

// Função para exibir o array de forma organizada e bonita
function exibirArray(array) {
    console.log("Valores em ordem crescente:");
    console.log(array.join(", "));
}

// Instanciando função obterValores()
const listaArray = obterValores("Digite o primeiro valor (use somente os números): ", "Digite o segundo valor, ele deve ser diferente do primeiro valor (use somente os números): ");

// Ordenando o array e armazenando o resultado
const arrayOrdenado = ordenarOrdemCrescente(listaArray);

// Exibindo o array de forma organizada e bonita
exibirArray(arrayOrdenado);
