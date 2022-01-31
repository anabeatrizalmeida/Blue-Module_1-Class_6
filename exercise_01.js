let lista = [];
let listaPar = [];
let listaImpar = [];

let num = 0;

while (num < 20) {
    num = num + 1;
    //console.log(num);
    lista.push(num);
}

while (lista.length != 0){
    numero = lista.pop();
    if (numero%2 == 0){
        listaPar.push(numero);
    } else {
        listaImpar.push(numero);
    }
}
console.log(lista);
console.log(listaPar);
console.log(listaImpar);