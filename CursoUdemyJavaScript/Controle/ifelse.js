const imprimirResultado=function(nota){
    if(nota>=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
 
imprimirResultado(10)
imprimirResultado(4)
//imprimirResultado('Epa!')// cuidado!! 

 function entre  (valor){
    if(valor>=8 && valor<=10){
        console.log("pode entrar")
    }else{
        console.log("caia fora")
    }
    
}
entre(11)