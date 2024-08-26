// pasta virtual
namespace main{
    // importacao
    declare var require: any;
    const prompt = require('prompt-sync')();

    // funcoes
    let multiplicar = function(num1: number, num2: number): number{
        // var retorno
        let res: number = 0;
        try {
            // multiplica
            res = num1 * num2;
        } catch (error) {
            console.log(error);
        } finally {
            // def retorno
            return res;
        }
    }

    let exibirSaudacao = function(nome: string): string{
        // var retorno
        let strSaudacao: string = '';
        try {
            // saudacao
            strSaudacao = 'Olá ' + nome;
        } catch (error) {
            console.log(error);
        } finally {
            // def retorno
            return strSaudacao;
        }
    }

    let esperaEntrada = function(): void{
        try {
            // variaveis
            let opcao: number;
            let resultado: string | number;
            // primeira interacao
            opcao = parseInt(prompt("Escolha uma opcao: '1'=multiplicar, '2...100000'=saudação => "));
            console.log('\n');
            // verifica a opcao
            if (opcao == 1){
                // variaveis
                let num1: number = 0, num2: number = 0;
                // entradas
                num1 = parseInt(prompt("Entre com 1º numero: "));
                num2 = parseInt(prompt("Entre com 2º numero: "));
                console.log('\n');
                // chamada
                resultado = multiplicar(num1, num2)
            } else {
                // variavel
                let nome: string = '';
                // entrada
                nome = prompt("Entre com um nome: ");
                console.log('\n');
                // chamada
                resultado = exibirSaudacao(nome);
            }
            // exibe resultado
            console.log(resultado);
            console.log('\n');
        } catch (error) {
            console.log(error);
        }
    }

    // chamada da funcao
    esperaEntrada();
}