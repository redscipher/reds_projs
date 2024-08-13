// evento
$(document).ready(()=>{

    // funcoes
    let iniciaAjax = function(){
        try {
            // objetos
            const eImg = $('#id-img-avatar');
            const eNome = $('#id-nome');
            const eUsuario = $('#id-usuario');
            const eNumReps = $('#id-num-reps');
            const eNumSeguidores = $('#id-num-seguidores');
            const eNumSeguindo = $('#id-num-seguindo');
            const eLink = $('#id-link');
            // constantes
            const strURL = 'https://api.github.com/users/redscipher';
            // executa requisicao
            fetch(strURL).then(function(resposta){
                // retorna resposta
                return resposta.json();})
                .then(function(json){
                    // carrega pagina com as informacoes requisitadas
                    console.log(json);
                    eImg.attr('src', json.avatar_url);
                    eNome.text(json.name);
                    eUsuario.text('@' + json.login);
                    eNumReps.text(json.public_repos);
                    eNumSeguidores.text(json.followers);
                    eNumSeguindo.text(json.following);
                    eLink.attr('href', json.html_url);})
                .catch(function(erro){
                    alert('erro: ' + erro.stack);
                });
        } catch (error) {
            console.log(error.stack);
        }
    }

    // chama funcao
    iniciaAjax();

});