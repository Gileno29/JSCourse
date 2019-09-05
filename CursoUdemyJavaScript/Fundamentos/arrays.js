const valores= [7.7,8.9,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// Em javascript tentar acessar um elemeto do array que não existe não dá erro

valores[10]=10
console.log(valores)
console.log(valores.legth)
valores.push({id:3}, false,null, 'teste')
console.log(valores)
console.log(valores.pop())//retorna o ultimo valor do array
delete valores[0]//deleta o valor do indice indicado
console.log(valores)

console.log(typeof valores)