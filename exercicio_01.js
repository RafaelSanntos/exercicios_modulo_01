const prompt = require('prompt-sync')();

let inputCelsius;

function obterTemperaturaGrauCelsius() {
    while(true){
        inputCelsius = parseFloat(prompt("Digite o valor da temperatura em graus Celsius que deseja transformar em graus Fahrenheit (use somente os números): "));
        if (!isNaN(inputCelsius)) {
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
}

function converterCelsiusParaFahrenheit(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

function exibirResultado(fahrenheit) {
    console.log("Resultado: " + inputCelsius + "°C equivalem a " + fahrenheit + "°F");
}

// Chamando funções
obterTemperaturaGrauCelsius()
let fahrenheit = converterCelsiusParaFahrenheit(inputCelsius);
exibirResultado(fahrenheit)
