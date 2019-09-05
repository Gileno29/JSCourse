// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(2, 3);
imprimirSoma(2);//o resultado é um not a number
imprimirSoma(2,3,4,5,7,8);//soma os dois primeiros e ingnora os restantes

//funcao com retorno
function soma(a,b = 0){
    return a+b;
}

console.log(soma(2,3));
console.log(soma(2));