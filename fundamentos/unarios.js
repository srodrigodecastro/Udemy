let num1 = 1
let num2 = 2

num1++    //EXPRESSÃO++ = pós-fixada - o MAIS MAIS vai APÓS a EXPRESSÃO
console.log(num1)
--num1 // --EXPRESSÃO = pré-fixada - o MENOS MENOS vai ANTES da EXPRESSÃO
console.log(num1)

console.log(++num1 === num2--) // aqui a sentença é verdadeira porque o -- do num2 só subtrai depois da comparação, por isso na linha 10 o a comparação da falsa pq no final da linha 9 é que é subtraido o --, ou seja, primeiro fez num1 mais 1 que da 2 e compara com o num2 que vale 2, logo 2(num1) é extritamente igual a 2(num2) e só depois da comparação que o programa vai ler o -- subtraindo do num 2, 1 valor tornando ai o num2= 1, logo na linha 10 a comparação se tornaria 2 === 1 que é falso! 
console.log(num1 === num2)