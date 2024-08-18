// importacoes
const Veiculo = require("./veiculo");

class Carro extends Veiculo{
    // ---
    constructor(nome, marca, qtdPortas){
        // carrega classe pai
        super(nome, marca);

        // atributos do carro
        this.qtdPortas = qtdPortas;

         // funcoes
        this.acelerar = function(){
            console.log('acelerando carro ' + this.qtdPortas + ' portas');
        }
    }
    // ---
}

// exportacao
module.exports = Carro;