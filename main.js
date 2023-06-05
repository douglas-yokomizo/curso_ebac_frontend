const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 10 },
    { nome: 'Pedro', nota: 4 },
    { nome: 'Julia', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Danilo', nota: 9 }
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 6)
console.log(aprovados)
