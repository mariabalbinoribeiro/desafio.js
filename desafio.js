let alunos = ["joao", "juliana", "ana", "caio"];
let media = [10, 8, 7.5, 9];

function buscarAluno(nome) {
    let indice = alunos.indexOf(nome);

    if (indice !== -1) {
        return media[indice];
    } else {
        return "Aluno não encontrado";
    }
}

console.log(buscarAluno("ana"));
console.log(buscarAluno("maria"));