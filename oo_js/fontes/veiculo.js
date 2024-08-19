class Veiculo {
    // ----
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
    }

    // funcoes
    acelerar = function(){
        console.log('Acelerando o veiculo');
    }
    // ----
}

// exportacoes
module.exports = Veiculo;