function quickSort(lista){
    //Se a lista tiver só 1 elemento, retorna ela
    if(lista.length < 2){
        return lista
    }

    //Define o pivo com um número aleatório do array
    indicePivo = Math.floor(Math.random() * lista.length)
    const pivo = lista[indicePivo]

    //Arrays para armazenarem os valores que são menores/maiores do que o pivo 
    const menores = []
    const maiores = []

    //Loop para percorrer a lista
    for (let i = 0; i < lista.length; i++){
        if (i === indicePivo) continue

        if(lista[i] <= pivo){
            menores.push(lista[i])
        }else{
            maiores.push(lista[i])
        }
    }

    return [... quickSort(menores), pivo,... quickSort(maiores)]
}

module.exports = quickSort