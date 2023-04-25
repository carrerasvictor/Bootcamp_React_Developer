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

const idades = alunos.reduce((acc, alunos)=>{
    return acc + alunos.idade;
},0)

console.log(idades);