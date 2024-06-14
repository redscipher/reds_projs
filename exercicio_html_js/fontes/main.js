//variaveis + constantes globais
const formulario = document.querySelector('form');
const frmBotao = document.querySelector('#btnEnviar');
const pValidacao = document.getElementById('idMsgVal');
//retorna elementos
const elem1 = document.querySelector('#idVlrA');
const elem2 = document.querySelector('#idVlrB');
// == classes
const clsValidacao = document.querySelector('.cls_form_valida');
//exibe mensagem 
console.log(formulario);
console.log(frmBotao);
console.log(pValidacao);
console.log(clsValidacao);

// == funcoes
let exibeMensagemUsuario = function(formValido){
    console.log(formValido);
    //remove classes
    clsValidacao.classList.remove('erro');
    clsValidacao.classList.remove('sucesso');
    // formulario esta valido ?
    if (formValido) {
        //exibe mensagem de sucesso
        clsValidacao.classList.add('sucesso');
        pValidacao.innerHTML = '<p>Sucesso: Números válidos.</p>';
    }else{
        //exibe mensagem de erro
        clsValidacao.classList.add('erro');
        pValidacao.innerHTML = '<p>Aviso: O campo B tem de ser maior que o campo A.</p>';
    }
}

let validaNumeros = function(num1, num2){
    //variavel retorno
    let flgValido;
    console.log('numero 2 eh: ' + num2);
    console.log('numero 1 eh: ' + num1);
    //formulario sera valido caso o num2 > num1.
    flgValido = num2 > num1 ? true : false;
    //def retorno
    console.log('portanto eh: ' + flgValido);
    return flgValido;
}

let ValidaFormulario = function(e){
    //desabilita seguir com acao padrao do evento
    e.preventDefault();
    //variaveis
    let formValidoFinal;
    //valida informacoes
    formValidoFinal = validaDados
    //reseta formulario caso esteja valido
    if (formValidoFinal) {
        elem1.value = '';
        elem2.value = '';
        pValidacao.value = '';
        // esconde classe
        clsValidacao.classList.remove('erro');
        clsValidacao.classList.remove('sucesso');
    }
}

let validaDados = function(e){
    // variaveis
    let num1, num2;
    let formValido;
    // retorna os valores digitados
    num1 = document.querySelector('#idVlrA').value;
    num2 = document.querySelector('#idVlrB').value;
    //exibicao
    console.log(num1);
    console.log(num2);
    //tratamento
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    // valida os numeros
    formValido = validaNumeros(num1, num2);
    // controle exibicao mensagem usuario
    exibeMensagemUsuario(formValido);
    // def retorno
    return formValido;
}

//adiciona um ouvinte de evento
formulario.addEventListener('submit', ValidaFormulario);
// adiciona um ouvinte de evento p/ cada tecla pressionada, efetuando a validacao sem precisar clicar em enviar
elem1.addEventListener('keyup', validaDados);
elem2.addEventListener('keyup', validaDados);