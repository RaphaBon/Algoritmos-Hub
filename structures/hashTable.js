//Aqui usamos class e não function pois terá outras funções dentro dela (mais organizado)
class HashTable {

    //Método construtor da classe, ou seja, função que roda quando criamos o objeto
    //Ex: const tabela = new HashTabel() -> Cai na função constructor
    constructor(tamanho = 50){
        //Cria um array com o tamanho definido
        this.tabela = new Array(tamanho)
        //Armazena o tamanho do array
        this.tamanho = tamanho
    }

    //Função hash que converte uma string em um indice (aonde o valor vai ser inserido)
    hash(chave){

        //Variavel que vai armazenar o valor do hash
        let hash = 0

        //Loop para percorrer cada letra da chave
        for(let i = 0; i < chave.length; i++){

            //Char code pega o valor numérico de cada string e soma 
            hash += chave.charCodeAt(i)
        }

        //Retornamos o indice dentro do tamanho da tabela
        return hash % this.tamanho
    }

    //Funcao para inserir os dados na tabela
    inserir(chave, valor){

        //Pega o indice chamando a função hash
        const indice = this.hash(chave)

        //Se não tiver nada no indice indicado pela função hash
        if(!this.tabela[indice]){
            //Criamos um array dentro daquele indice
            this.tabela[indice] = []
        }

        const array = this.tabela[indice]

        //Adicionamos a chave e o valor na tabela
        array.push([chave, valor])
    }

    //Função para pegar um valor pela chave
    buscar(chave){

        const indice = this.hash(chave)

        //Pegamo todo o array naquela posição ( para mostrar todos os dados )
        const array = this.tabela[indice]

        //Se tem algo no indice indicado
        if(array){
            //Percorremos cada item do array
            for(let i = 0; i < array.length; i++){
                //Se a chave for encontrada
                if(array[i][0] === chave){
                    //Retornamos o valor
                    return array[i][1]
                }
            }
        }

        return undefined
    }

    remover(chave){

        const indice = this.hash(chave)
        const array = this.tabela[indice]

        if(array){
            for(let i = 0; i < array.length; i++){

                if(array[i][0] === chave){
                    //Função que remove o elemento do array
                    array.splice(i,1)

                    return true
                }
            }
        }
    }
}

module.exports = HashTable