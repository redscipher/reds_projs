//variaveis
let flgBootstrap = false, flgJQuery = false;

//funcoes
let inicializaBootstrap = function(){
    try {
        console.log('Bootstrap preparado');
        // carregado
        flgBootstrap = true
        console.log(flgBootstrap);
   } catch (error) {
        flgBootstrap = false
        console.log(error.message);
   }
}

let inicializaJQuery = function(){
     try {
          console.log('JQuery preparado');
          // carregado
          flgJQuery = true
          console.log(flgJQuery);

          // correcao 5: 'mascara' nao existe, e sim 'mask'
          $('#id-link').mask('(00) 00000-0000', {
               placeholder: 'https://website.com'
          })
      
          // correcao 6: atributo 'requerido' nao existe, e sim 'required'
          $('form').validate({
               rules: {
                    nmLink: {
                         required: true
                    }
               },
               submitHandler: function (form) {
                    alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
               form.reset();
               },
               invalidHandler: function (form, validator) {
               // alteracao 7: exibicao da quantidade de campos invalidos
                    alert("Por favor, preencha os campos para prosseguir com a compra! " + validator.numberOfInvalids() + ' campos inválidos!');
               }
          })
    } catch (error) {
          flgJQuery = false
          console.log(error.message);
    }
 }

 let validaEntrada = function(){
     try {
          // valida jquery
          if (flgJQuery) {

          }
     } catch (error) {
          console.log(error.message);
     }
 }

 let adicionaImagem = function(e){
     try {
          // valida jquery e bootstrap
          if (flgBootstrap && flgJQuery) {
               alert('voce apertou o botao');
               // valida entrada correta
               if (validaEntrada()) {

               }else{
                    // lanca excecao

               }
          }
     } catch (error) {
          console.log(error.message);
     }
 }




// confirma/espera todo conteudo do dom ser carregado
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
$(document).ready(inicializaJQuery);

// eventos
$('form').on('click', adicionaImagem);