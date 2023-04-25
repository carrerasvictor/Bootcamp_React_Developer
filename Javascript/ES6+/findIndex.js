const alunos = [
    {
        nome: 'Victor',
        idade: 21,
    },
    {
        nome: 'Erenilda',
        idade: 23,
    },
    {
        nome: 'Gustavo',
        idade: 24,
    },
    {
        nome: 'Felipe',
        idade: 13,
    },
];

const alunoRobertoIndex = alunos.findIndex(aluno => aluno.nome === 'Victor')
console.log(alunoRobertoIndex);