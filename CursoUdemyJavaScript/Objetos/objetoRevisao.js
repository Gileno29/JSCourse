//coleção dinâmica chave valor

const produto = new Object
produto.nome='Cadeira'
produto['marca do produto']='Generica'
produto.preco=220

console.log(produto)

delete produto.preco
delete produto['marca dp produto']