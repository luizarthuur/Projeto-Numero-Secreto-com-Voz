const body = document.querySelector('body')
function verificaValorValido (chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `
        
        <div style = "display: block">Você não disse um número, por favor repita o seu chute dizendo um valor numérico!</div>
        `
        return
    }

    if (numeroMaiorOuMenorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div style = "display: block"> Valor inválido, o seu chute deve estar entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto) {
        body.innerHTML = `
        <h2> Parabéns, você acertou!!!! </h2>
        <br>
        <br>
        <p> O número secreto era ${numeroSecreto}!</p>

        <button id="jogar-novamente" class="btn-jogar-novamente">Jogar Novamente</button>
        `
    }

    else if (numero > numeroSecreto) {
       elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>` 
    }

    else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>'
    }
}

function chuteForInvalido (numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOPermitido(numero) {
    if (numero < menorValor || numero > maiorValor) {

    return numero
}
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

