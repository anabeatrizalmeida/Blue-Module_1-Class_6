// Para fazer o prompt rodar.
var prompt  = require(`prompt-sync`)();

// Criando as listas que vão receber os elementos.
let idades = [];
let alturas = [];

// Fazendo um laço e repetição para colocar os elementos dentro das listas.
let pergunta=0;
while (pergunta<5){
    const idade = +prompt(`Digite sua idade: `);
    const altura = +prompt(`Digite sua altura: `);
    idades.push(idade);
    alturas.push(altura);
    pergunta = pergunta +1;
}

// Fazendo as somas dos elementos das listas.
let somaIdades = idades.reduce(function(somaIdades, inicio){
    return somaIdades + inicio;
}, 0);

let somaAlturas = alturas.reduce(function(somaAlturas, start){
    return somaAlturas + start;
}, 0);

// Printando no terminal as listas.
console.log(`Idades: ${idades}`);
console.log(`Alturas: ${alturas}`);
console.log(`Média das idades: ${somaIdades/idades.length}`); // Tirando a mádia.
console.log(`Média das alturas: ${somaAlturas/alturas.length}`); // Tirando a média.
