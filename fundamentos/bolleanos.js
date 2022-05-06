let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log('os verdadeiros...');
console.log(!!3) // todos os números inteiros com excessão do 0 são verdadeiros
console.log(!!-1) // todos os números inteiros com excessão do 0 são verdadeiros
console.log(!!' ') // espaços vazios são verdadeiros
console.log(!![]) // array são verdadeiros
console.log(!!{}) // objeto literal é verdadeiro
console.log(!!Infinity) // tipo infinito também é verdadeiro
console.log(!!(isAtivo = true))

console.log('os Falsos....')
console.log(!!0)
console.log(!!'') // string vazia sem espaço inclusive - falso
console.log(!!null) // Null = Nulo
console.log(!!NaN) //Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || 'epa!'))

let nome = 'Rodrigo'
console.log(nome || 'Desconhecido')