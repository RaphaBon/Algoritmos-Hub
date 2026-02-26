const { Raphael } = require("../data/grafo")

function dfs(grafo, inicio, objetivo){

    //Objeto para marcar visitados
    const visitados = {}

    //Objeto para guardar o caminho anterior
    const anterior = {}

    function buscar(atual){

        visitados[atual] = true

        if(atual === objetivo){
            return true
        }

        const vizinhos = grafo[atual] || []

        for(let i=0; i < vizinhos.length; i++){

            const vizinho = vizinhos[i]

            if(!visitados[vizinho]){

                //Guardamos que chegamos no vizinho através do atual.
                /**EX:
                 *      grafo["Raphael"] = ["Julia"]
                 *      grafo["Julia"] = ["Marcos"]
                 * 
                 *      Quando estamos em Raphael e executamos o comando a baixo, dizemos que o anterior de Julia é Raphael.
                 */

                anterior[vizinho] = atual

                // Aqui repetimos tudo que foi feito até agora com recursão.
                if(buscar(vizinho)){
                    return true
                }
            }
        }
        return false
    }

    //Buscamos através do inicio, o que nos dará algo assim: anterior = {Julia: Raphael
    //                                                                   Marcos: Julia}
    buscar(inicio)

    //Logo, agora temos que reconstruir o caminho
    const caminho = []

    //Variavel que começa com o elemento final, no caso marcos
    let passo = objetivo

    //Enquanto existir um nó atual para analisar
    while(passo){
        
        /**Pegamos o valor atual de passo. Ex:
         * Interação 1:
         *  passo = "Marcos"
         * 
         * caminho = ["Marcos"]
         * 
         *  passo = anterior["Marcos"]
         *  passo = "Julia"
         * 
         *  caminho = ["Julia", "Marcos"]
         * 
         *  passo = anterior["Julia"]
         *  passo = "Raphael"
         * 
         *  caminho = ["Raphael", "Julia", "Marcos"]
         */

        caminho.unshift(passo)

        passo = anterior[passo]
    }

    // Se o 1° elemento do caminho for diferente do que o inicío, quer dizer que algo deu errado.
    if(caminho[0] !== inicio){
        return null
    }

    // Se for igual, retornamos o caminho
    return caminho

}

module.exports = dfs