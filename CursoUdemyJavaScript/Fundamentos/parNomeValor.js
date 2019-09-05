// nome/valor
const saudacao='opa';//contexto léxico

function exec(){
    const saudacao ='falaa';// contexto lexico
    return saudacao;
}
//Objetos são grupos aninhados de pares nome/valor

const cliente={
    nome:'pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro:"Rua Muito Legal",
        numero:123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);