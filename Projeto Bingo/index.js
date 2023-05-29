function randomizador(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)

}
function play(){
    numero = 0
    numeroSorteados = 0
    const paragrafo = document.createElement("p")
    const body = document.body
    while (numeroSorteados != 99){
        numero = randomizador(0,100)
        numeroSorteados = numeroSorteados + 1
        console.log(numero)
        console.log(numeroSorteados)
        const numeroSorteado = document.createTextNode(numero)
        body.appendChild(paragrafo)
        paragrafo.appendChild(numeroSorteado)
    }

}