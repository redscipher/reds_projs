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
    } catch (error) {
          flgJQuery = false
          console.log(error.message);
    }
 }

 let validaEntrada = function(){
     try {
          // variavel
          let controle = false;
          // valida jquery
          if (flgJQuery) {
               // valida formulario
               $('form').validate({
                    rules: {
                         nmLink: {
                              required: true
                         }
                    },
                    submitHandler: function (form) {
                         adicionaImagem()
                         // reseta formulario
                         form.reset();
                    },
                    invalidHandler: function (form, validator) {
                         alert("Por favor, preencha o campo adicionar uma imagem! " + validator.numberOfInvalids() + ' campos inválidos!');
                    }
               })
          }
          // def retorno
          return controle;
     } catch (error) {
          console.log(error.message);
     }
 }

 let validaAdcImagem = function(e){
     try {
          e.preventDefault();
          // valida jquery e bootstrap
          if (flgBootstrap && flgJQuery) {
               // valida entrada correta
               validaEntrada();
          }
     } catch (error) {
          console.log(error.message);
     }
 }

let adicionaImagem = function(){
     try {
          // pega carrossel
          const carrossel = $('#id-carrossel');
          // validacao
          if (carrossel){
               // constante
               const eLink = $('#id-link');
               let strEndereco = eLink.val();
               // adciona novo elemento na lista
               const novoItem = $('<li class="carousel-item" data-bs-interval="3000"></li>');
               // imagem + efetua adicao de fato com metodo appendTo()
               $(`<img class="d-block w-100" src="${strEndereco}" alt="${strEndereco}">`).appendTo(novoItem);
               //efetua insercao pelo metodo append()
               $('ul').append(novoItem)
               // reseta campo
               eLink.val('');
               // itens do carrosel
               const items = document.querySelectorAll('.carousel-item');
               // tamanho do carrossel
               let tamCarr = items.length - 1;
               // novo indicador p/ adicionar
               const novoIndicador = $(`<button type="button" data-bs-target="#id-carrossel" data-bs-slide-to="${tamCarr}"></button>`);
               // adiciona no objeto indicador
               $('.carousel-indicators').append(novoIndicador);
               // Atualize o carousel
               carrossel.carousel('next');
          }
     } catch (error) {
          alert(error.message);
     }
}


// confirma/espera todo conteudo do dom ser carregado
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
$(document).ready(inicializaJQuery);

// eventos
$('form').on('submit', validaAdcImagem);