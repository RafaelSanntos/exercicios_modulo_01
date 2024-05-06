const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

console.log("\n********************************************************************** Exercício 1 **********************************************************************\n");

let inputCelsius;

// Solicitar ao usuário que insira a temperatura em graus Celsius
while(true){
    inputCelsius = parseFloat(prompt("Digite o valor da temperatura em graus Celsius que deseja transformar em graus Fahrenheit (use somente os números): "));
    if (!isNaN(inputCelsius)) {
        console.clear();
        break;
    }
    console.clear();
    console.log("Por favor, insira apenas números. Tente novamente.\n");
}

// Função para converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

// Chamando a função celsiusParaFahrenheit() e armazenando o valor na variável fahrenheit
let fahrenheit = celsiusParaFahrenheit(inputCelsius);

// Exibir o resultado
console.log("\n*********************************************************************************************************************************************************\n");

console.log("Resultado: " + inputCelsius + "°C equivalem a " + fahrenheit + "°F");

console.log("\n*********************************************************************************************************************************************************");
