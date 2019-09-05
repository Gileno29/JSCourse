let dobro = function(a){
    return 2*a
}


//função arrow
dobro = (a)=>{
    return 2* a
}

//function arrow de unica linha
dobro= a=>2*a//return implicito

console.log(dobro(Math.PI))


let ola= function(){
    return 'ola'
}
ola = ()=> 'ola'

console.log(ola())