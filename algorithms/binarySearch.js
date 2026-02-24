function binarySearch(lista, item){
    //Define o início e o fim do array
    let baixo = 0
    let alto = lista.length - 1
    while (baixo <= alto){
        //Dividir na metade e verificar aonde o item está
        const meio = Math.floor((baixo + alto) / 2)
        const chute = lista[meio]

        if (chute === item){
            return meio
        }

        if (chute > item){
            alto = meio - 1
        }
        else {
            baixo = meio + 1
        }
    }

    return null
}

module.exports = binarySearch

