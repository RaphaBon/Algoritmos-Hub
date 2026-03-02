// Criamos uma função para calcular a distancia primeiro
// Distancia Euclidiana ( distancia entre 2 pontos )
function distancia(pontoA, pontoB){

    // Vai gaurdar (x1+x2)² - (y1+y2)²
    let soma = 0

    // Percorremos cada dimensão. Ex: [5,2], 5 signifca romance (1̣° dimensão), 2 significa acao (2° dimensao)
    // Se pontoA for [5,2], vai rodar 2 vezes.
    for(let i = 0; i < pontoA.length; i++){
        soma += (pontoA[i] - pontoB[i]) ** 2
    }

    return Math.sqrt(soma)
}

// Recebe os pontos conhecidos [5, 2], as classificações (gostou/naoGostou), o novo ponto (novo filme), e a quantidade de vizinhos
function knn(dados, rotulos, novoPonto, k){

    // Vai armazenar: {rotulo: gostou, distancia: 1}
    let distancias = []

    // Calcula a distnacia para todos os pontos conhecidos
    for(let i = 0; i < dados.length; i++){

        //Chamamos a função que calcula e passamos o dado e o novoPonto, ex: [5, 2] e [4, 1]
        const d = distancia(dados[i], novoPonto)

        // E guardamos o resultado
        distancias.push({
            rotulo: rotulos[i],
            distancia: d
        })

        /** 
         * Ficanado assim:
         * [
            {rotulo:"Gostou", distancia:1},
            {rotulo:"Gostou", distancia:1},
            {rotulo:"NaoGostou", distancia:5},
            {rotulo:"NaoGostou", distancia:3.6}
           ]
         */
    }

    /** Ordena as distancia das menores para as maiores
     *  Sort é uma função do js que ordena arrays, onde por padrão ele ordena textos
     *  a,b são doois elementos quaisquer do array que o js está comparando no momento
     *  Se vier negativo, A é menor que B (4 - 5)
     *  Se vir positivo, B é menor que A (5 - 4)
     *  Se for 0, eles são iguais (4 - 4)
     */

    distancias.sort((a,b) => a.distancia - b.distancia)
    
    // Pegamos os k primeiros, ou seja, uma quantidade X que é mais próximo do novo ponto
    const vizinhos = distancias.slice(0, k)

    // Vamos ver se tem mais "gostou" do que "não gostou" 
    let contagem = {}

    // Para cada vizinho que encontrar
    for(let v of vizinhos){

        if(!contagem[v.rotulo]) // Se o genero desse filme ainda nao esta no meu "placar"
        {
            contagem[v.rotulo] = 0 // Adicionamos com o valor 0
        }

        // Se já estiver, adiciono 1 voto
        contagem[v.rotulo]++
    }

    // Agora que o placar esta pronto, ex: {"acao": 3, "drama": 1}
    // precisa descobrir qual tem mais votos

    let melhorRotulo = null // guardar o nome do genero vencedor
    let maior = 0 // guardar quantos votos teve

    for(let r in contagem){ // para cada genero do placar

        if(contagem[r] > maior){
            maior = contagem[r]
            melhorRotulo = r
        }
    }

    return melhorRotulo
}

module.exports = knn

