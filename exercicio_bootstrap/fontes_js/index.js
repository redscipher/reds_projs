//variaveis
let flgControle = false;

// ativa modo sem conflitos
let $j = jQuery.noConflict();

//funcoes
let InicializaJQuery = function(){
    try {
        //exibe mensagem
        console.log('JQuery inicializado.');
        ///////////////////
        flgControle = true;
    } catch (error) {
        flgJQuery = false;
        console.log(error.message);
    }
}

let validaFormulario = function(e){
    try {
        //validacao
        if (flgControle) {
            // valida formulario
            $j('form').validate({
                //atributo de regras
                rules:{
                    strNome: {
                        required: true,
                    },
                    strEmail: {
                        required: true,
                        email: true,
                    },
                },
                messages:{
                    strNome: 'Insira seu nome',
                    strEmail: 'Insira seu email'
                },
                //funcao p/ quando o formulario esta valido
                submitHandler: function(form){
                    alert('Cadastro enviado.');
                    //recarrega formulario
                    form.reset();
                    window.location.reload();
                },
                //funcao chamada quando o formulario esta invalido
                invalidHandler: function(evento, validador){
                    //quantidade de campos faltando
                    let camposIncorretos = validador.numberOfInvalids();
                    //exibe mensagem de erro
                    alert(`Preencha o(s) ${camposIncorretos} campo(s) necessario(s).`);
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

//evento p/ validar JQuery
$j(document).ready(InicializaJQuery);

//eventos
$j('form').on('click', validaFormulario);

