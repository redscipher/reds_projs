// evento dom
// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('id-btn-cep').addEventListener('click', function(){
//         // == preparando p/ executar requisicao AJAX : objeto requisitor
//         const xhttp = new XMLHttpRequest();
//         // cep
//         const cep = document.getElementById('id-cep').value;
//         // ponto endereco
//         const url = `https://viacep.com.br/ws/${cep}/json`;
//         // metodo
//         xhttp.open('GET', url);
//         // efetua requisicao
//         xhttp.send();
//     });
// });


// evento jquery
$(document).ready(function(){
    // aplica mascara
    $('#id-cep').mask('00000-000');

    // evento
    $('#id-btn-cep').on('click', function(){
        // salva referencia botao
        const botao = $(this);
        // esconde lupa
        $(this).find('i').addClass('d-none');
        $(this).find('span').removeClass('d-none');
        // cep
        const cep = $('#id-cep').val();
        // variavel
        let url;
        // ponto endereco
        url = `https://viacep.com.br/ws/${cep}/json`;

        // efetua requisicao com JQuery
        // $.ajax(url).done(function(resposta){
        //     console.log(resposta);
        //     // resposta
        //     const log = resposta.logradouro;
        //     const bairro = resposta.bairro;
        //     const cidade = resposta.localidade;
        //     const uf = resposta.uf;
        //     const end = `${log}, ${bairro} - ${cidade}/${uf}`
        //     // endereco
        //     $('#id-end').val(end);
        //     // tempo
        //     setTimeout(() => {
        //         // esconde carregamento
        //         botao.find('i').removeClass('d-none');
        //         botao.find('span').addClass('d-none');
        //     }, 1000);
        // });

        // efetua requisicao com FETCH API => nativo do javascript
        fetch(url).then(function(resposta){
            return resposta.json()})
            .then(function(json){
                // resposta
                const log = json.logradouro;
                const bairro = json.bairro;
                const cidade = json.localidade;
                const uf = json.uf;
                const end = `${log}, ${bairro} - ${cidade}/${uf}`
                console.log(end);
                 // endereco
                $('#id-end').val(end);
            })
            .catch(function(erro){
                alert('erro: ' + erro.stack);
            })
            .finally(function(){
                // tempo
                setTimeout(() => {
                    // esconde carregamento
                    botao.find('i').removeClass('d-none');
                    botao.find('span').addClass('d-none');
                }, 1000);
            });
    });

    $('#id-form').on('submit', function(e){
        e.preventDefault();
        try {
            if ($('#id-nome').val().length == 0) {
                throw new Error('Digite o nome');
            }
        } catch (error) {
            console.log(error.stack);
        }
    });
})