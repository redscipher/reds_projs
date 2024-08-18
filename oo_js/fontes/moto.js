// importacoes
const Veiculo = require("./veiculo");

class Moto extends Veiculo{
    // ---
    constructor(nome, marca){
        // carrega classe pai
        super(nome, marca);

        // atributos da moto
        this.possui02Rodas = true;

        // funcoes
        this.acelerar = function(){
            console.log('acelerando moto');
        }
    }
    // ---
}

// exportacao
module.exports = Moto;