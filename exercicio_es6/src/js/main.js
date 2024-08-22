// importacao
const Aluno = require('./alunos');
// objetos
const prompt = require('prompt-sync')();

// vetor p/ guardar os objetos
const turmaA = [];

let esperaInputUsuario = function(){
    try {
        // exibe mensagem ao usuario + retorno
        const nomeAluno = prompt('Digite o nome do aluno: ');
        const notaAluno = prompt('Digite a nota do aluno: ');
        console.log('\n');
        // adiciona novo item na lista turma
        const alunoNovo = new Aluno(nomeAluno, notaAluno);
        turmaA.push(alunoNovo);
    } catch (error) {
        console.log(error.stack);
    }
}

// funcao p/ retornar alunos
const validaQualificados = function(notaFiltro){
    try {
        // filtra os alunos de acordo com a nota passada
        return turmaA.filter((item)=>{
                    // retorno
                    return item.nota >= notaFiltro;
                })
    } catch (error) {
        console.log(error.stack);
    }
}

let preencheVetor = function(){
    try {
        // variavel resposta + controle
        let resposta = prompt(`Entrar com aluno nº ${turmaA.length + 1} ('S'=sim, 'N'=não): `);
        console.log('\n');
        let controle = resposta == 'S' || resposta == 's' ? true: false;
        // -------------
        let flgLoop = false;
        // loop
        while(controle){
            flgLoop = true;
            // entrada
            esperaInputUsuario();
            // exibe mensagem novamento
            resposta = prompt(`Entrar com aluno nº ${turmaA.length + 1} ('S'=sim, 'N'=não): `);
            console.log('\n');
            controle = resposta == 'S' || resposta =='s' ? true: false;
        }
        // validacao
        if (flgLoop) {
            // variavel nota minima p/ passar
            // let notaMinima = parseFloat(prompt(`Digite a nota minima p/ passar: `));
            // console.log('\n');
            // valida com base na nota passada
            const alunos = validaQualificados(6);
            // exibicao resultado
            console.log(...alunos);
        } 
    } catch (error) {
        console.log(error.stack);
    }
}

// chamada a funcao
preencheVetor();