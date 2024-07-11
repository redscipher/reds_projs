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


// confirma/espera todo conteudo do dom ser carregado
document.addEventListener('DOMContentLoaded', inicializaBootstrap);
$(document).ready(inicializaJQuery);