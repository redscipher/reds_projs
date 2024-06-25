//== variaveis
//controle
let flgJQuery = false;

//funcoes
let InicializaJQuery = function(){
    try {
        //exibe mensagem
        console.log('JQuery inicializado.');
        /////////////////
        flgJQuery = true;
    } catch (error) {
        flgJQuery = false;
        console.log(error.message);
    }
}

//evento p/ validar JQuery
$(document).ready(InicializaJQuery);

//eventos
