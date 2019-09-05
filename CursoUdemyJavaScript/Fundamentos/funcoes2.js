//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b);
}

imprimirSoma(2,3);

//Armazenando uma funcao arrow em uma variavel

const soma= (a,b)=>{//isso é uma função escrita de forma reduzida
    return a+b;
}
console.log(soma(2,3));

//retrno implícito
const subtracao = (a,b)=>a-b;
const imprimir = a => console.log(a);