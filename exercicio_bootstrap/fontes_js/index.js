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

        
    let enviarCadastro = function(e){
        try {
            // valida JQuery pronto
            if (flgJQuery) {
                //apresenta mensagem
                e.preventDefault();
                // exibe mensagem
                alert('Cadastro enviado.');
                // recarrega pagina
                window.location.reload(true);
            }
        } catch (error) {
            console.log(error.message)
        }
    }



    //eventos
    $j('button').on('click', enviarCadastro)
    } catch (error) {
        flgJQuery = false;
        console.log(error.message);
    }
}


//evento p/ validar JQuery
$j(document).ready(InicializaJQuery);
