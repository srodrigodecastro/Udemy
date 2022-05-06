const escola = "Cod3r"

console.log(escola.charAt(4)); //Qual o ítem após a quarta letra no caso C1 o2 d3 34 (r5) = r
console.log(escola.charAt(5)); // Não da erro, mesmo não havendo nada após a quinta letra ou item
console.log(escola.charCodeAt(3)) // Na tabela unicode entendemos que o código do número 3 é o número 51
console.log(escola.indexOf('3')) // retorna o item referenciado caso haja, como procurei o 3 ele localiozu em Cod3r

console.log(escola.substring(1)) // A partir do índice 1 até o final ele vai me retornar todo o resto = od3r
console.log(escola.substring(0, 3)) // vai do 0 e não vai incluir o índice 3 = Cod -  vá do 0 até o 3 sem incluir os finais

console.log('Escola '.concat(escola).concat("!")) //posso mesclar o literal ('Escola ') e uni com o cont
console.log(escola.replace(3, 'e')) // substituição do número 3 pela string e = de Cod3r para Coder

console.log('Ana,Maria,Pedro'.split(','))

// no contexto de string posso usar o .concat ou o símbolo de + exemplo:

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '+(escola)+("!"))