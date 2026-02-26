// Import algorithms
const binarySearch = require("./algorithms/binarySearch");
const quickSort = require("./algorithms/quickSort");
const Fila = require("./algorithms/queue")
const bfs = require("./algorithms/bfs")
const dfs = require("./algorithms/dfs")
const dijkstra = require("./algorithms/dijkstra")

// Importa data structures
const HashTable = require("./structures/hashTable")

// Import data sources
const grafo = require("./data/grafo")

console.log("---------------- TESTANDO LISTA -------------------")
console.log()
// Initialize and display the original list
const lista = [12, 3, 2, 5, 74, 9, 11, 13]
console.log("Lista Original:", lista)

console.log()
console.log("---------------- TESTANDO QUICKSORT -------------------")
console.log()
// Sort the previous list using quickSort
const listaOrdenada = quickSort(lista)
console.log("Lista Ordenada:", listaOrdenada)

console.log()
console.log("---------------- TESTANDO PESQUISA BINÁRIA -------------------")
console.log()
// Search for desired item in the ordened list
const resultado = binarySearch(listaOrdenada, 5)
console.log("Resultado da busca:", resultado)

console.log()
console.log("---------------- TESTANDO TABELAS HASH -------------------")
console.log()

// Initialize Hash Table
const tabela = new HashTable()


// Testing data insertion
tabela.inserir("Raphael", 18)
tabela.inserir("Pedro", 13)
tabela.inserir("José", 83)


// Testing data searching 
console.log(tabela.buscar("Raphael"))
console.log(tabela.buscar("José"))

console.log()
console.log("---------------- TESTANDO GRAFO -------------------")
console.log()

// Validate graph connections
console.log("Conexões de Raphael:")
console.log(grafo["Raphael"])

console.log()
console.log("---------------- TESTANDO FILA -------------------")
console.log()

// Testing queue
const fila = new Fila()

fila.enfileirar("Raphael")
fila.enfileirar("Julia")
fila.enfileirar("Laura")
fila.mostrar()

console.log()

console.log("Saiu", fila.desenfileirar())


console.log()

fila.mostrar()

console.log()
console.log("---------------- TESTANDO BFS -------------------")
console.log()

// Testing bfs
const caminho = bfs(grafo, "Raphael", "Ana")
console.log(caminho)

console.log()
console.log("---------------- TESTANDO DFS -------------------")
console.log()

console.log(dfs(grafo, "Raphael", "Ana"))

console.log()
console.log("---------------- TESTANDO DIJKSTRA -------------------")
console.log()

const grafoDijkstra = {}

grafoDijkstra["Raphael"] = {
    Pedro: 6,
    Lucas: 9,
}

grafoDijkstra["Pedro"] = {
    Marcos: 4
}

grafoDijkstra["Lucas"] = {
    Marcos: 10
}

grafoDijkstra["Marcos"] = {}

const caminhoDijkstra = dijkstra(grafoDijkstra, "Raphael", "Marcos")

console.log(caminhoDijkstra)
