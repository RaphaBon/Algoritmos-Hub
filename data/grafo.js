//Objeto que será o grafo
const grafo = {}

//Alimentamos o grafo, onde as chaves são os nós e os valores são os vizinhos.
grafo["Raphael"] = ["Lucas", "Joaquim", "Pedro"]
grafo["Lucas"] = ["Raphael", "Maria"]
grafo["Joaquim"] = ["Raphael", "Ana"]
grafo["Pedro"] = ["Raphael", "Maria"]
grafo["Maria"] = ["Lucas", "Pedro"]
grafo["Ana"] = ["Joaquim"]

module.exports = grafo

