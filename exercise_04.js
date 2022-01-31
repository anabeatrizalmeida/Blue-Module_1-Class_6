// Criando as listas.
let numeros = [];
let num1 = [];
let num2 = [];
let num3 = [];
let num4 = [];
let num5 = [];
let num6 = [];

//Laço de repetição para lançamento do dado.
let lancamento = 0
while (lancamento < 100){
    let num = Math.floor(Math.random() * 6) + 1; // Gera número aleatório.
    numeros.push(num);
    lancamento = lancamento + 1;
// Coloca cada número aleatório em sua respectiva lista.
    let dado = numeros.pop();

    if (dado == 1){
        num1.push(dado);
    } else if (dado == 2){
        num2.push(dado);
    } else if (dado == 3){
        num3.push(dado);
    } else if (dado == 4){
        num4.push(dado);
    } else if (dado == 5){
        num5.push(dado);
    } else if (dado == 6){
        num6.push(dado);
    }
}

// Mostra no terminal quantos elementos têm na lista.
console.log(num1.length);
console.log(num2.length);
console.log(num3.length);
console.log(num4.length);
console.log(num5.length);
console.log(num6.length);
