let isAtivo = false
console.log(isAtivo)


isAtivo=true
console.log(isAtivo)


isAtivo= 1
console.log(!!isAtivo)// Duas negações negação da negação uma só apenas nega o valor
console.log(!!3)//forçando conversão
console.log(!!-1)//forçando conversão para true
console.log(!![])// 
console.log(!!Infinity)//
console.log(!!(isAtivo=true))


//situação que resolve para falso
console.log('os falsos..')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))