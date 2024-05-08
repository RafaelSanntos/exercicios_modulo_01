// Variável para contar o número de resultados encontrados
let contador = 0;

// Criando função para verificar se um número, quando dividido por 11, tem resto igual a 5
function verificaResto(numero) {
    return numero % 11 === 5;
}

// Criando função para exibir o resultado
function exibirNumeros() {
    console.log("\nNuméros de 1000 até 1999 divididos por 11 que tem resto igual a 5:\n");

    // Loop de 1000 a 1999
    for (let i = 1000; i <= 1999; i++) {
    
    
        if (verificaResto(i)) {
            contador++;
            console.log(contador + 'º ' + i);
        }
    }
}

//Instanciando função exibirNumeros()
exibirNumeros();
