const alunosNota = [
    {nome: 'André', nota: 5},
    {nome: 'Jamilly', nota: 6},
    {nome: 'Pedro', nota: 7}
];

function filtraNota(alunosNota) {
    return alunosNota.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtraNota(alunosNota);
console.log(alunosAprovados);
