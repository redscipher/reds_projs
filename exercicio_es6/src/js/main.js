// importacao
const Aluno = require('./alunos');

// vetor p/ guardar os objetos
const turmaA = [];
// objeto
const aluno1 = new Aluno('fulano', 10);
const aluno2 = new Aluno('cricrano', 7);
const aluno3 = new Aluno('beltrano', 3);
const aluno4 = new Aluno('leidiane', 5);
const aluno5 = new Aluno('cleyson', 9);

// adiciona os alunos no array
turmaA.push(aluno1);
turmaA.push(aluno2);
turmaA.push(aluno3);
turmaA.push(aluno4);
turmaA.push(aluno5);

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

// busca os alunos que possuem uma nota >= 6
const alunos = validaQualificados(6);

// exibicao
console.log(...alunos);