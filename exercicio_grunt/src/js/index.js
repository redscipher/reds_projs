// variaveis
let flgBootstrap = false;

// funcoes
let inicializaBootstrap = function(){
    try {
        // controle variavel global
        flgBootstrap = true;
        console.log(flgBootstrap);
    } catch (error) {
        flgBootstrap = false;
        console.log(error.message);
    }
}

// carregando toda pagina
document.addEventListener('DOMContentLoaded', inicializaBootstrap);

// eventos
document.querySelector('form').addEventListener('submit', function(e){
    alert('Ação efetuada!');
    this.reset();
});