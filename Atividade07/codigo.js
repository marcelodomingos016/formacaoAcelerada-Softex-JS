console.log('Média de Alunos')

var nota1 = 7
console.log('Primeira nota: ', nota1)
var nota2 = 5
console.log('Segunda nota: ', nota2)
var nota3 = 10
console.log('Terceira nota: ', nota3)

var media = (nota1 + nota2 + nota3) / 3

var notaMinima = 7

if (media >= notaMinima) {
    console.log('Média: ', media, '  Aluno Aprovado!')
} else {
   console.log('Media: ', media, '  Aluno Reprovado!')
}