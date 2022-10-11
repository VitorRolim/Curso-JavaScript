var num1 = prompt('Digite um numero')
var operacao = prompt('Digite a operacaçao aritmética: soma ou subtracao ') 
var num2 = prompt('Digite um segundo numero')

function calculo(num1, num2, operacao){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    var resultado = 0

    if(operacao == 'soma'){
        resultado = num1 + num2
        
    }else if(operacao == 'soma'){
        resultado = num1 - num2
    }
    return resultado
}



document.write('O resultado da soma é: '+ calculo(num1,num2, operacao))

