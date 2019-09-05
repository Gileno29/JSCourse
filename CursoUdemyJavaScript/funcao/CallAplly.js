function getPreco(imposto=0, moeda='R$'){
    return`${moeda} ${this.getPreco*(1-this.desc)*(1+imposto)}`
}

const produto ={
    nome: 'Notebook',
    preco: 4589,
    desc:0.15,
    getPreco
}