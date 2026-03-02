// Função greedy que recebe os estados que devem ser abrangido e as estações
function greedy(estadosNecessarios, estacoes){
    
    //estacaoFinal é uma estrutura de dados chamada set que aramazena dados únicos sem repetições.
    const estacoesFinal = new Set()

    //Enquanto ainda houver estados:
    while(estadosNecessarios.size > 0){
        
        //Criamos uma variável para armazenar a melhor estação e depois salvar-la no set
        let melhorEstacao = null
        //Outra variável que armazena os estados que ja abrangemos para atualizar. 
        let estadosCobertos = new Set()

        //Para cada estação no grupo de estações
        for(let estacao in estacoes){

            //Const que armazena os estados que a estação atual abrange
            const estados = estacoes[estacao]

            //Pega os estados que essa estação abrange dos que ainda faltam.
            const cobertos = new Set(
                //O Spread Operator (...) espalha o Set dentro de um array, pois nao podemos aplicar filtro direto no Set
                //Dentro desses "espalhados", pegamos só o que essa estação cobre.
                [... estadosNecessarios].filter(estado => estados.has(estado))
            )

            //Se essa estação abranger mais estados do que a quantidade que já foi abrangida, atualizamos
            if(cobertos.size > estadosCobertos.size){
                //Essa vira a melhor estação
                melhorEstacao = estacao

                //Atualizamos os estados cobertos
                estadosCobertos = cobertos
            }   
        }

        //Pegue os estados que nao estao cobertos, ou seja, retiramos os que ja foram
        estadosNecessarios = new Set(       
            [... estadosNecessarios].filter(estado => !estadosCobertos.has(estado))
        )

        //Passamos a melhor estação ao resultado
        estacoesFinal.add(melhorEstacao)
    }

    return estacoesFinal
}

module.exports = greedy