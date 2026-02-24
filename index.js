//Importa os algoritmos
const binarySearch = require("./algorithms/binarySearch");
const quickSort = require("./algorithms/quickSort");

//Define uma lista prévia
const lista = [12, 3, 2, 5, 74, 9, 11, 13]

console.log("Lista Original:", lista)

//Ordena a lista prévia pelo método quickSort
const listaOrdenada = quickSort(lista)

console.log("Lista Ordenada:", listaOrdenada)

//Encontra o item desejado na lista ordenada 
const resultado = binarySearch(listaOrdenada, 5)

console.log("Resultado da busca:", resultado)