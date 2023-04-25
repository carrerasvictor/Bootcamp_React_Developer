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

const acimaDeNove = alunos.some(alunos => alunos.idade < 10)
console.log(acimaDeNove)