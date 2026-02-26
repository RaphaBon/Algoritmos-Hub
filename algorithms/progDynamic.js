// Fazendo o exemplo da Knapsack com progamação dinâmica.

let pesos = [1, 4, 3]
let valores = [1500, 3000, 2000]
let capacidade = 4

function mochila(){

    /**
     *  Criamos a tabela como arrays, onde o tamanho do array das linhas é (pesos.length+1), ou seja, (3 + 1).
     *      O método .fill serve para preencher esse array com Undefined.
     *       Depois, o método .map, para cada posição do array, vai criar um novo valor,
     *        No caso um array de tamanho (capacidade + 1) cheio de 0.
     *      Portanto:
     *          Cria um array de 4 posições (linha) e para cada linha, adicione um array assim: [0,0,0,0,0]
     *      Ficando:
     *      tabela =
                [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
                ]
     */         

    let tabela = Array(pesos.length+1).fill().map(() => Array(capacidade+1).fill(0)) 

    // Percorremos cada item da tabela, onde cada i = x, o x representara o item 
    for(let i = 1; i<= pesos.length; i++){
        // E para cada item percorremos os pesos.
        for(let j = 1; j <= capacidade; j++){
            // Veficamos se cabe o item na mochila ( se o peso do item 0 for menor que a capacidade )
            if(pesos[i - 1] <= j){

                // Estamos comparando duas opções:

                tabela[i][j] = Math.max( // Como para cada item, vemos se pegamos ou não o item, usamos Math.max que pega o maior valor entre os 2. Ex: Math.max(x, y) 

                    // A 1° opção (x) será: Nao pegar o item, ou seja, pegamos o maior valor possivel usando os itens anteriores com a mesma capacidade
                    tabela[i-1][j],
                    
                    // A 2° opção (y) será: Valor do item atual + o melhor valor possível usando os itens anteriores com o espaço restante, ex:
                    /**
                     *    Item autal:
                     *      valor = 2000,
                     *      peso = 3
                     *    Espaço restante = 4 - 3 = 1 
                     *      Melhor valor com peso 1: 1500
                     *    logo, 2000 + 1500 = 3500
                     */

                    valores[i-1] + tabela[i-1][j-pesos[i-1]]
                )

            }
            // Se o item nao couber, pegamos o resultado anterior
            else{
                tabela[i][j] = tabela[i-1][j]
            }
        }
    }

    // Retornar o maior valor com 3 itens e peso 4.
    return tabela[pesos.length][capacidade]

}