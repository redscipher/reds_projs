// ativa modo sem comfl
let $j = jQuery.noConflict();

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

let enviarCadastro = function(e){
    try {
        // valida JQuery pronto
        if (flgJQuery) {
            //apresenta mensagem
            e.preventDefault();
             // correcao 6: atributo 'requerido' nao existe, e sim 'required'
            $('form').validate({
                rules: {
                    strNome: {
                        required: true,
                        placeholder: 'Seu nome'
                    },
                    strEmail: {
                        required: true,
                        email: true,
                        placeholder: 'Seu email'
                    },
                    strContato: {
                        placeholder: 'Seu contato'
                    }
                },
                submitHandler: function (form) {
                    alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
                     // recarrega pagina
                    window.location.reload(true);
                },
                invalidHandler: function (form, validator) {
                    // alteracao 7: exibicao da quantidade de campos invalidos
                    alert("Por favor, preencha os campos para prosseguir com a compra! " + validator.numberOfInvalids() + ' campos inválidos!');
                }
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}




//evento p/ validar JQuery
$j(document).ready(InicializaJQuery);
//eventos
$j('form').on('submit', enviarCadastro)

