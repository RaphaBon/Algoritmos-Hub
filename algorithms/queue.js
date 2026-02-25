// Criamos uma classe para fila
class Fila{

    // Método construtor da classe (roda quando criamos a classe)
    constructor(){
        // Criamos a fila:
        this.queue = []
    }

    // Método para adicioanr elementos na fila
    enfileirar(elemento){
        this.queue.push(elemento)
    }

    // Método para remover elementos da fila
    desenfileirar(){
        //Removemos o 1° item
        return this.queue.shift()
    }

    // Método para ver o primeiro elemento da fila
    primeiro(){

        return this.queue[0]

    }

    estaVazia(){

        return this.queue.length === 0

    }

    mostrar(){

        console.log(this.queue)
    }

}

module.exports = Fila