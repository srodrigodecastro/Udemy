/* Sobre Verdadeiro e/ou Falso
 * V e V -> V
 * V e F -> F
 * F e F -> F

 * V ou ? -> V
 * F ou V -> V
 * F ou F -> F
 
 * V xor V -> F     ----- xor = exclusivo verdadeiro
 * V xor F -> V
 * F xor V -> V
 * F xor F -> F
 
 * !V -> F
 * !F -> V      ------- ! = NEGAÇÃO
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) --- bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))