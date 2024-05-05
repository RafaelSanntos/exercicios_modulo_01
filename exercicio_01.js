var prompt = require('prompt-sync')();

console.log("\n");
console.log("********************************************************************** Exercício 1 **********************************************************************\n");

// Solicitar ao usuário que insira a temperatura em graus Celsius
    //isNaN() - verifica se o input NÃO é um número e retorna (true) e se for número retorna (false)
while(true){
    var celsius = parseFloat(prompt("Digite o valor da temperatura em graus Celsius que deseja transformar em graus Fahrenheit (use somente os números): "));
    if (!isNaN(celsius)) {
        console.clear();
        break;
    }
    console.clear();
    console.log("Por favor, insira apenas números. Tente novamente.\n");
}

// Função para converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius) {
    var fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

// Chamando a função celsiusParaFahrenheit() e armazenando o valor na variável fahrenheit
var fahrenheit = celsiusParaFahrenheit(celsius);

// Exibir o resultado
console.log("\n*********************************************************************************************************************************************************\n");

console.log("Resultado: " + celsius + "°C equivalem a " + fahrenheit + "°F");

console.log("\n*********************************************************************************************************************************************************");
