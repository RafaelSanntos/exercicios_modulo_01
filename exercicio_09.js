const prompt = require('prompt-sync')();

// Criando fução obterCodigo()
function obterCodigo(mensagem) {
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

// Criando fução identificarRegiao()
function identificarRegiao(codigo) {
    switch(codigo) {
        case 1:
            console.log("O código é do Sul");
            break;
        
        case 2:
            console.log("O código é do Norte");
            break;
        
        case 3:
            console.log("O código é do Leste");
            break;
        
        case 4:
            console.log("O código é do Oeste");
            break;

        case 5:
        case 6:
            console.log("O código é do Nordeste");
            break;

        case 7:
        case 8:
        case 9:
            console.log("O código é do Sudeste");
            break;

        default:
            if (codigo >= 10 && codigo <= 20) {
                console.log("O código é do Sudeste");
            } else if (codigo >= 25 && codigo <= 50) {
                console.log("O código é do Sudeste");
            } else {
                console.log("Produto Importado");
            }
    }
}

// Instanciando função obterCodigo() e identificarRegiao()
const codigo = obterCodigo("Digite o código de origem do produto: ");
identificarRegiao(codigo);
