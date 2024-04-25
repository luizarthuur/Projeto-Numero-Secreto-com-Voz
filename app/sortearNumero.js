function verificacaoDeMenorValor (menorValor) {
    if (menorValor < 0 || Number.isNaN(menorValor) == true) {
        menorValor = 1
    }
    
    else {
        menorValor = menorValor
    }
    
    return menorValor
}

function verificaoDeMaiorValor (maiorValor) {
    if (maiorValor < 0 || Number.isNaN(maiorValor) == true || maiorValor <= menorValor ) {
        maiorValor = 100
    }
    
    else {
        maiorValor = maiorValor
    }
    
    return maiorValor
}

var menorValor = parseInt(prompt('Digite o menor valor'));

menorValor = verificacaoDeMenorValor(menorValor);

var maiorValor = prompt(('Digite o maior Valor'))

maiorValor = verificaoDeMaiorValor(maiorValor);

const numeroSecreto = parseInt(Math.random() * maiorValor + 1);

function gerarNumeroSecreto () {
    numeroSecreto
    console.log('O número secreto é ' + numeroSecreto)
}

gerarNumeroSecreto();

const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerHTML = maiorValor