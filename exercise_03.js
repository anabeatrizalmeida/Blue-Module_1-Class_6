var prompt  = require(`prompt-sync`)();

let alunos = [];
let notas = [];

let contador=0;
let numeroAlunos = +prompt(`Digite o numero de alunos: `);
while (contador < numeroAlunos){
    const aluno = prompt(`Digite os nomes dos alunos: `);
    const nota = +prompt(`Digite as notas dos alunos: `);
    alunos.push(aluno);
    notas.push(nota);
    contador = contador +1;
}

let somaNotas = notas.reduce(function(somaNotas, start){
    return somaNotas + start;
}, 0);

console.log(alunos);
console.log(notas);
console.log(somaNotas/notas.length);

