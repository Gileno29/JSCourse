for(let i =0; i<10;i++){
    console.log(i);
}

console.log('i =', i);//o escopo do let é de bloco por isso vai dar erro

//########################Continuação######################


const funcs= [];

for(var i=0;i<=10;i++){
    funcs.push(function(){
        console.log(i);
    })
}

funcs[2]();//com var dá bug vai ser sepre imprimido o ultimo valor pois ele não possui escopo de bloco
funcs[8]();

