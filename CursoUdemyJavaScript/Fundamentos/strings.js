const escola = "Cod3r"

console.log(escola.charAt(4))//retorna a letra na posicao do indice
console.log(escola.charCodeAt(3))// retorna o valor da posicao do indice na tabela asc


console.log(escola.indexOf('3'))
console.log(escola.substring(1))//ele vai imprimir tudo após esse indice
console.log(escola.substring(0,3))// vai imprimir tudo do indice 0 ao 2
console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3,'e'))//substia posição 3 pela letra
console.log('Ana,Maria,Pedro'.split(','))//gera um array com 3 elementos diferentes
