const peso1 =1.0;
const peso2= Number('2.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1))//retorna true caso o numero seja inteiro
console.log(Number.isInteger(peso2))//retorna true caso o numero seja inteiro

const avaliacao1 = 9.871
const avaliacao2= 6.871

const total = avaliacao1*peso1+avaliacao2*peso2
const media= total/(peso1+peso2)

console.log(media.toFixed(2))//fixa a quantidade de casas decimais após a vírgula em 2
console.log(media.toString())//retorna o valor em forma de string
console.log(typeof media)

