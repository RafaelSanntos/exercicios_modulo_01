const prompt = require('prompt-sync')(); //biblioteca prompt-sync lê a entrada do usuário no Node.js

//declarando variáveis global
let primeiroInteiro;
let segundoInteiro;
let terceiroInteiro;
let quartoInteiro;

console.log("\n********************************************************************** Exercício 3 **********************************************************************\n");

//criando função para solicitar os dados e tratar exeções (BONÛS)
function solicitarDados(){
    while(true){
        primeiroInteiro = parseInt(prompt("Digite o primeiro número inteiro: "));
        if (!isNaN(primeiroInteiro)){
            console.clear();
            break;
        }
        console.clear();
        console.log("Por favor, insira apenas números. Tente novamente.\n");
    }
}

//instanciando a função solicitarDados()
solicitarDados();

console.log(primeiroInteiro);