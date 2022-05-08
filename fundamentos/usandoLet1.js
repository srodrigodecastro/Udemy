var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero);

//Let fora e dentro do bloco, não são influenciadas, pois primeiro o programa busca o número dentro do programa menor, isto é, dentro de {} e depois procura o número fora, então, diferente de var eu uso o mesmo nome de variável e não há conflito de alteração de dados.
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)