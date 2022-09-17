
function calculadora() {

    const operacao = Number(prompt('Escolha uma Operação:\n\n 1- Adição ( + ) \n 2- Subtração ( - ) \n 3- Multiplicação ( * )\n 4- Divisão ( / )'))

    let num1 = Number(prompt('Insira o primeiro valor a ser calculado:'))
    let num2 = Number(prompt('Insira o segundo valor a ser calculado:'))

    switch (operacao) {
        case 1:
            let soma = num1 + num2
            document.write('A soma entre ', num1, '  +  ', num2, '  =  ', soma)
            break
        case 2:
            let subtracao = num1 - num2
            document.write('A subtração entre ', num1, '  -  ', num2, '  =  ', subtracao)
            break
        case 3:
            let multiplicacao = num1 * num2
            document.write('A multiplicação entre ', num1, '  x  ', num2, '  =  ', multiplicacao)
            break
        case 4:
            let divisao = num1 / num2
            document.write('A divisão entre ', num1, '  /  ', num2, '  =  ', divisao)
            break
    }
}

calculadora()