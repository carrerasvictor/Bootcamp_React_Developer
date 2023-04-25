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

const alunosFiltrados = alunos.filter(alunos => alunos.idade >= 18)
console.table(alunosFiltrados)