function dijkstra(grafo, inicio ,objetivo){

    // Objeto para armazenar os custos
    const custos = {}

    // Objeto que guardará o anterior do elemento atual
    const pais = {}

    // Array para armazenar dados ja processados
    const processados = []

    // Declarando que todos os nós custa infinito
    for(let no in grafo){
        custos[no] = Infinity
    }

    // Custo para chegar no inicio é 0
    custos[inicio] = 0

    // Função para achar o nó mais barato não processado:
    function menorCusto(){

        // Variaveis que armazenara o nó de menor custo para chegar
        let menor = Infinity
        let menorNo = null

        // Para cada nó no grafo
        for(let no in grafo){  

            //Se o custo do nó for menor do que o menor custo já obtido, e esse nó nao estiver no array de já processados
            if(custos[no] < menor && !processados.includes(no)){
                // O menor custo passa a ser o desse nó
                menor = custos[no]
                menorNo = no
            }
        }

        return menorNo
    }

    //Pegamos o nó de menor custo da tabela
    let no = menorCusto()

    // Aqui verifica se há algum caminho mais barato passando por ele:
    // Enquanto houver nó não processado
    while(no !== null){

        // Pegamos o custo e os custos para chegar nos vizinhos do nó atual, no caso o início.
        const custo = custos[no]
        const vizinhos = grafo[no] || {}

        // Para cada vizinho dele:
        for(let vizinho in vizinhos){

            // Quanto custa para chegar no vizinho passando pelo nó atual
            /** Ex:
             *      Até o Raphael -> custo 0
             *      De Raphael até Pedro -> custo 6, logo novoCusto = 0 + 6
             */

            const novoCusto = custo + vizinhos[vizinho]

            /**  Se encontrar um caminho mais barato, atualiza
             *   Ex: 
             *     Antes para chegar em Pedro era = Infinity. E agora é 6.
             *       6 < Infinty ?  
             *         True, portanto atualizamos:
             *          
             */

            if(novoCusto < custos[vizinho]){

                // Custo para chegar no vizinho que era Infinity recebe o 6
                custos[vizinho] = novoCusto

                // Pai desse vizinho é o nó atual, no caso Raphael
                /**
                 *  Para chegar em X -> veio de Y
                 */
                pais[vizinho] = no

            }
        }
        
        // Depois de analisar todos os vizinhos, marcamos o nó como processado
        processados.push(no)

        // E pegamos o novo nó com menor custo
        no = menorCusto()
    }

    // Reconstrução do caminho igual ao DFS:

    const caminho = []
    let passo = objetivo

    while(passo){
        caminho.unshift(passo)
        passo = pais[passo]
    }
        
    // Se o começo do caminho nao for o inicio, deu algo errado
    if(caminho[0] !== inicio){
        return null
    }

    // Se nao, retorna o caminho e o custo para chegar até o objetivo
    return {
        caminho,
        custo: custos[objetivo]
    }
}

module.exports = dijkstra