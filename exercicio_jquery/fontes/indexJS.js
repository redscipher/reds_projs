//== funcoes


//principal
let inicializaJQuery = function(){
    try {
        //testa se o JQuery esta funcionando
        console.log($(document));
        //
        
    } catch (error) {
        console.log(error.message);
    }
}

//inicia biblioteca JQuery
$(document).ready(inicializaJQuery);