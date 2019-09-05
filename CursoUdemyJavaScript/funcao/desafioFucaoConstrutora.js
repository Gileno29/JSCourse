/*class Pessoa{
    constructor(nome){
        this.nome= nome
    }

    falar(){
        console.log('Meu nome é Gileno')
    }
}

constp1 = new Pessoa('João')
p1.falar()*/

function criarPessoa(nome, idade){
   this.nome = nome
   this.idade= idade

   this.falar= function(){
       console.log(`Meu nome é ${this.nome}, ${this.idade}`)
   }
   
}


const p1 = new criarPessoa('Gileno',16)
p1.falar()