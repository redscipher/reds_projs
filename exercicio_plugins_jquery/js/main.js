// funcoes
let inicializaJQuery = function(){
    try {
        //testa se jQuery iniciou
        console.log($(document));

        //inicia carrosel
        // correcao 4: ID do carrossel + uso do plugin 'slick'
        $('#carousel-imagens').slick({
            autoplay: true,
            arrows: false
        })

        // correcao 5: 'mascara' nao existe, e sim 'mask'
        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(DDD) 12345-6789'
        })
        
        $('#cpf').mask('000.000.000-00', {
            placeholder: '123.456.789-00'
        })
        
        $('#cep').mask('00000-000', {
            placeholder: '012345-678'
        })
        
        // correcao 6: atributo 'requerido' nao existe, e sim 'required'
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefone: {
                    required: true
                },
                endereco: {
                    required: true
                },
                cep: {
                    required: true,
                },
                cpf: {
                    required: true
                },
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
        console.log(error.message);
    }
}

// correcao 1) executa codigo JQuery apos toda pagina carregada
$(document).ready(inicializaJQuery);