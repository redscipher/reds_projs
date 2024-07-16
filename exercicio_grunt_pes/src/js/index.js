// documento pronto
document.addEventListener('DOMContentLoaded', function(){
    // evento envio do objeto formulario
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        // para execucao padrao
        e.preventDefault();
        // variaveis
        let numeroMaximo = document.getElementById('id-numero').value;
        numeroMaximo = parseInt(numeroMaximo);
        // aleatorio
        let numeroAleat = Math.random() * numeroMaximo;
        numeroAleat = Math.floor(numeroAleat);
        // tratamento
        if (numeroAleat <= 1) numeroAleat = 2;
        // exibicao
        document.getElementById('id-valor').innerText = numeroAleat;
        document.querySelector('.resultado').style.display = 'block';
    });
});