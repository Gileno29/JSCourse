let valor;

console.log(valor)

valor =null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro!

const produto = {}//objeto vazio
console.log(produto.preco)//não dá erro o preço não está definido dentro do produto
console.log(produto)
produto.preco = 3.50// objeto

console.log(produto)

produto.preco=undefined// evite atribuir undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco=null// sem preço
console.log(!!produto.preco)
console.log(produto)

