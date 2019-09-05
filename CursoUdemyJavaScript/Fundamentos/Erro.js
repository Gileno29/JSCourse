
function tratarErroElancar(erro){
    //throw new Error('...');
    //throw 10
    //throw true
    throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritado(obj){
   
    try{
        console.log(obj.nome.toUppercase()+'!!!!');
    }catch(e){

    }
}

const obj={nome:'Roberto'}
imprimirNomeGritado(obj);
