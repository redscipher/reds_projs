//principal
let inicializaJQuery = function(){
    try {
        //testa se o JQuery esta funcionando
        console.log($(document));

        //constantes
        const olLista = $('#idLista');
        //vetores
        let vAtividades = [];
        
        //== funcoes dentro jquery
        let adicionaItem = function(e){
            try {
                //parar o evento
                e.preventDefault();
                //constantes
                
                const eAtividade = $('#idAtividade');
                const clsVal = $('.clsValidacao');
                let eMsgVal = $('#idMsgValidacao');
                //variaveis
                let controle;
                //valida se nao existe a informacao nos itens
                controle = vAtividades.includes(eAtividade.val()) ? false : true;
                //------------------------------
                if (controle){
                    //reseta mensagem
                    eMsgVal.text( '');
                    clsVal.slideUp();
                    // == efetua adicao
                    // variavel
                    let novoItem;
                    // insere no vetor
                    vAtividades.push(eAtividade.val());
                    // monta novo item
                    novoItem = $(`<li>
                    <div class="clsListaItens">
                        <h4>${eAtividade.val()}</h4>
                        <button>X</button>
                    </div>
                    </li>`);
                    //adiciona na lista
                    olLista.append(novoItem);
                    //reseta os campos
                    eAtividade.val('');
                }else{
                    // define mensagem
                    eMsgVal.text('Aviso: Lista já possui esta atividade!');
                    //animacao p/ exibir
                    clsVal.slideDown();
                }
            } catch (error) {
                console.log(error.message);
            }
        }

        let riscarItem = function(e){
            try {
                //---- 'this' faz referencia ao objeto alvo do evento, de trata do seu endereco na memoria, um ponteiro
                // adiciona css ao elemento do evento
                $(this).css({'text-decoration': 'line-through'});

            } catch (error) {
                console.log(error.message);
            }
        }

        let removerItem = function(e){
            try {
                //---- 'this' faz referencia ao objeto alvo do evento, de trata do seu endereco na memoria, um ponteiro
                //remove o item + proximo do botao
                $(this).closest('li').remove();
            } catch (error) {
                console.log(error.message);
            }
        }

        //eventos
        $('#ifFrm').submit(adicionaItem);
        // desta forma, o evento fica exclusivo p/ os itens que ja existem
        // pois esta sendo adicionado o evento diretamento ao item, que eh estatico
        // e nao na lista, que esta sim eh dinamica;
        //=============================
        //$('ol li').click(riscarItem);
        //=============================
        // adicionando o evento dinamicamente na lista, p/ todos os itens, atuais e futuros
        olLista.on('click', 'li h4', riscarItem);
        // adciona um evento dinamicamente p/ efetua a delecao de um item da lista
        olLista.on('click', 'li button', removerItem)
    } catch (error) {
        console.log(error.message);
    }
}

//inicia biblioteca JQuery
$(document).ready(inicializaJQuery);