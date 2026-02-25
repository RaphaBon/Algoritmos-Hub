// Importa a fila
const Fila = require("./queue")

// Função BFS
function bfs(grafo, inicio, objetivo){

    // Cria a fila e passa o ponto incial da fila
    const fila = new Fila()
    fila.enfileirar(inicio)

    // Cria o objeto para marcar os visitados e marca o inicio como visitado
    const visitados = {}
    visitados[inicio] = true

    // Objeto para guardar o nó anterior da fila
    const anterior = {}

    // Enquanto a fila nao estiver vazia
    while(!fila.estaVazia()){

            // Remove o primeiro elemento da fila.
            const atual = fila.desenfileirar()

            // Se o atual  for o objetivo:
            if(atual === objetivo){

                // Constante para armazenar o caminho final
                const caminho = []

                // Essa variável vai armazenar os nós do final para o começo
                let passo = objetivo

                while(passo){   //Enquanto o objetivo  ainda estiver na lista

                    //Remove da fila o objetivo  e salva no inicio do array
                    caminho.unshift(passo)

                    //E passa o anterior do objetivo, neste caso é Raphael
                    passo = anterior[passo]
                }  
                //Retorna todo o caminho
                return caminho 
            }

            
                /**Pega os vizinhos de atual. Ex:
                 *      atual = "Raphael"
                 *      vizinhos = grafo["Raphael"]
                 *      vizinhos = ["Julia", "Laura"]
                 */

            const vizinhos = grafo[atual] || []

            // Percorre todos os vizinhos
            for(let i = 0; i < vizinhos.length; i++){

                // Aqui acessa cada vizinho por vez. Ex: vizinho = "Julia" e depois vizinho = "Laura"
                const vizinho = vizinhos[i]

                // Se ainda não visitou esse vizinho
                if(!visitados[vizinho]){

                    // Marca ele como visitado
                    visitados[vizinho] = true

                    // Pega o anterior desse vizinho, no caso "Raphael", para dizer: "Julia foi descoberta por Raphael"
                    anterior[vizinho] = atual

                    // Coloca o vizinho na fila
                    fila.enfileirar(vizinho)

                }
            }
    }

    return null
}

module.exports = bfs
