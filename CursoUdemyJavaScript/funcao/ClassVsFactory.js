class Pessoa{
    constructor(nome){
        this.nome= nome
    }

    falar(){
        console.log('Meu nome é Gileno')
    }
}

constp1 = new Pessoa('João')
p1.falar()

const Pessoa = nome=>{
    return{
        falar:()=> console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()