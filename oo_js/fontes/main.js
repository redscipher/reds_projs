// importacoes
const Carro = require('./carro');
const Moto = require('./moto');
const Veiculo = require('./veiculo');

// instancias dos objetos
const veiculo = new Veiculo('automotivo', 'brasileira');
const moto = new Moto('fazer', 'yamaha');
const carro = new Carro('civic', 'honda', 4);

// visualizacao
console.log(veiculo);
console.log(moto);
console.log(carro);

// acelerando
veiculo.acelerar();
moto.acelerar();
carro.acelerar();