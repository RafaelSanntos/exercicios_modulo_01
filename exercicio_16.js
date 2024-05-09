// Criando função para verificar números primos
function numeroPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Criando função para imprimir o resultado
function imprimirPrimeiros50PrimosAcimaDe100() {
    let contador = 0;
    let numero = 101; // Começar a partir de 101, o primeiro número primo acima de 100

    console.log("\nOs 50 primeiros números primos maior que 100:\n")
    while (contador < 50) {
        if (numeroPrimo(numero)) {
            console.log(numero);
            contador++;
        }
        numero++;
    }
}

imprimirPrimeiros50PrimosAcimaDe100();
